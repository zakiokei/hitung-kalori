"use client"; // Wajib untuk file React di Next.js

import { useState } from "react";

export default function App() {
  const [foodItems, setFoodItems] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  const [totalCalories, setTotalCalories] = useState(0);

  const addFood = () => {
    if (!foodName.trim() || !calories || isNaN(calories) || calories <= 0) {
      alert("Masukkan nama makanan dan jumlah kalori yang valid!");
      return;
    }

    const newFoodItem = { id: Date.now(), name: foodName, calories: parseInt(calories) };
    setFoodItems((prevItems) => [...prevItems, newFoodItem]);
    setTotalCalories((prevTotal) => prevTotal + newFoodItem.calories);

    // Reset input fields
    setFoodName("");
    setCalories("");
  };

  const removeFood = (id, calories) => {
    setFoodItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setTotalCalories((prevTotal) => prevTotal - calories);
  };

  return (
    <div className="container">
      <h1>Hitung Kalori</h1>
      <div className="form-group">
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          placeholder="Nama makanan"
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="Jumlah kalori"
        />
      </div>
      <button className="btn" onClick={addFood}>
        Tambah Makanan
      </button>
      <ul>
        {foodItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.calories} kalori
            <button onClick={() => removeFood(item.id, item.calories)}>Hapus</button>
          </li>
        ))}
      </ul>
      <div className="total">Total Kalori: {totalCalories}</div>
    </div>
  );
}
