import React from "react";
import { useState } from "react";

//set the ustate variable as empty since they are going to be filled by form data entered
function NewPlantForm({ newPlant }) {
  const [formData, setFormData] = useState({ name: "", image: "", price: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  
//submit to the db using method POST
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://react-hooks-cc-plantshop-k7zu.onrender.com/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        data((plants) => [...plants, data]);
       
      });
    setFormData({ name: "", image: "", price: "" });
  };
  return (
    <div className="new-plant-form">
    <form  onSubmit={handleSubmit}>
    <input type="text" name="name" placeholder="Plant name"  onChange={handleChange} value={formData.name} />
    <input type="text" name="image" placeholder="Image URL"  onChange={handleChange}value={formData.image}/>
    <input type="number" name="price" placeholder="Price" v onChange={handleChange}alue={formData.price}/>
    <button type="submit">Add Plant</button>
  </form>
  </div>
);
}

export default NewPlantForm;
