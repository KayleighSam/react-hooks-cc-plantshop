import React from "react";
import { useState } from "react";


function NewPlantForm({ newPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  const handleChange = ({ target: { name, value } }) =>
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  
//submit to the db using method POST
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/plants", {
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
