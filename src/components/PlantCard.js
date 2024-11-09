import React, { useState } from "react";

function PlantCard({ plant }) {
  const [soldOut, setsoldOut] = useState(false);

  const handleSoldOut = () => {
    setsoldOut((prev) => !prev);
  };
//container that holds the plant list and its details, also the operations to set whether the plant is available or sold out goes here
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>Price: {plant.price}</p>
      
      <button onClick={handleSoldOut} 
      style={{  background: soldOut ? "gray" : "green", 
                color: soldOut ? "black" : "white"  }} >
      {soldOut ? "Sold Out" : "Available"}
      </button>
    </li>
  );
}

export default PlantCard;
