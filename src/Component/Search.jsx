import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore"; 

const SearchFirebase = () => {
  const [search, setSearch] = useState(""); 
  const [data, setData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]); 
  const [suggestions, setSuggestions] = useState([]); 

  const db = getFirestore();
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "products")); 
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(fetchedData);
      setFilteredData(fetchedData); 
    };

    fetchData();
  }, [db]);

  useEffect(() => {
    if (search.trim() === "") {
      setSuggestions([]); 
      setFilteredData(data); 
    } else {
      const searchLower = search.toLowerCase();

      const results = data
        .flatMap((item) => {
          const { name, tags, categories } = item;
          const matches = [];

          if (name?.toLowerCase().includes(searchLower)) {
            matches.push(name);
          }

          if (tags && Array.isArray(tags)) {
            matches.push(...tags.filter((tag) => tag.toLowerCase().includes(searchLower)));
          }
          if (categories && Array.isArray(categories)) {
            matches.push(
              ...categories.filter((category) =>
                category.toLowerCase().includes(searchLower)
              )
            );
          }

          return matches;
        })
        .filter((item, index, self) => self.indexOf(item) === index) 
        .slice(0, 10); 

      setSuggestions(results);

      const filteredProducts = data.filter((item) => {
        const { name, tags, categories } = item;
        const nameMatch = name?.toLowerCase().includes(searchLower);
        const tagMatch = tags && tags.some((tag) => tag.toLowerCase().includes(searchLower));
        const categoryMatch =
          categories && categories.some((category) => category.toLowerCase().includes(searchLower));

        return nameMatch || tagMatch || categoryMatch;
      });

      setFilteredData(filteredProducts);
    }
  }, [search, data]);

  return (
    <div style={{ position: "relative", width: "300px", margin: "20px auto" }}>
  
      <input
        type="text"
        placeholder="Search by name, tags, or categories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            position: "absolute",
            width: "100%",
            background: "#fff",
            zIndex: 1000,
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => {
                setSearch(suggestion); // Set the clicked suggestion in the input
                setSuggestions([]); // Clear the dropdown
              }}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      {/* Display Filtered Products */}
      <div style={{ marginTop: "20px" }}>
        {filteredData.length > 0 ? (
          filteredData.map((product) => (
            <div key={product.id} style={{ padding: "10px", marginBottom: "10px", border: "1px solid #ddd" }}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              {/* You can display other product details like price, image, etc. */}
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default SearchFirebase;
