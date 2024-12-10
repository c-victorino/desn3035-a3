import React from "react";
import cardData from "../data/cardData.json";

export default function MenuCards() {
  return (
    <>
      {cardData.menuItems.map((item) => (
        <div className="menu-card" key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.altText} />
          <a href="#" className="menu-cta">
            {item.price}
          </a>
        </div>
      ))}
    </>
  );
}
