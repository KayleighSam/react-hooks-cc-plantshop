import React, { useState, useEffect } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

//fetch plants from the db.json
function PlantPage() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  //serach operations
  const [searchPlant, setsSearchPlant] = useState('');
  const handleSearchChange = (s) => {
    setsSearchPlant(s);
  };

  const plantFilter= plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchPlant.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search searchPlant={searchPlant} onSearchChange={handleSearchChange} />
      <PlantList plants={plantFilter } />
    </main>
  );
}

export default PlantPage;
