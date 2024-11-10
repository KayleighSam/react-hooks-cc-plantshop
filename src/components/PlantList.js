import React from "react";
import PlantCard from "./PlantCard";

//this is where we do the mapping of the plant list  with the key to ther plantcard container
function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
