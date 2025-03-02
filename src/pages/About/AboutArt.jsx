import React from 'react';
import { useEffect, useState } from "react";
import { useSpring, animated } from 'react-spring';
import './AboutArt.css';
import { Link } from "react-router-dom";


const groups = [
  {
    name: "Green Threads Collective",
    description: "A self-help group that crafts sustainable, upcycled fashion accessories from discarded fabrics.",
  },
  {
    name: "Harmony Home Creations",
    description: "An old-age home initiative that produces handcrafted home decor using eco-friendly materials like bamboo, jute, and recycled wood.",
  },
  {
    name: "EcoNest Co-op",
    description: "A community organization that makes eco-friendly storage containers, baskets, and household items from biodegradable materials.",
  },
  {
    name: "Sunrise Craft Guild",
    description: "A cooperative formed by rural artisans to produce handmade eco-friendly pottery, tableware, and decorative items.",
  },
  {
    name: "Bloom Earthworks",
    description: "An eco-conscious group of artisans specializing in plantable seed paper products and natural dyes for paper crafts and stationery.",
  },
  {
    name: "Roots & Wings Ventures",
    description: "A social enterprise focused on producing reusable, zero-waste personal care items like organic cotton cloth wipes, bamboo toothbrushes, and natural loofahs.",
  },
  {
    name: "Pure Haven Essentials",
    description: "A small business operated by retired citizens who make organic soaps, eco-friendly cleaning products, and upcycled glassware.",
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <h2 className="page-title">About Our Community Partners</h2>
      <p className="page-subtitle">Meet the groups making sustainable change</p>

      <div className="groups-container">
        {groups.map((group, index) => (
          <AnimatedCard key={index} name={group.name} description={group.description} />
        ))}
      </div>
    </div>
  );
};

const AnimatedCard = ({ name, description }) => {
  const [hovered, setHovered] = React.useState(false);
  const hoverAnimation = useSpring({
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: hovered ? '0px 5px 15px rgba(0, 0, 0, 0.2)' : '0px 2px 8px rgba(0, 0, 0, 0.1)',
  });

  return (
    <animated.div
      style={hoverAnimation}
      className="group-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="group-title">{name}</h3>
      <p className="group-description">{description}</p>
    </animated.div>
  );
};

export default AboutUs;
