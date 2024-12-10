import React from "react";
import cardData from "../data/cardData.json";

export default function WhyChooseUs() {
  return (
    <>
      {cardData.whyChooseUs.map((card) => (
        <div className="card-why" key={card.id}>
          <i className={`fa-solid ${card.icon}`} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </>
  );
}
