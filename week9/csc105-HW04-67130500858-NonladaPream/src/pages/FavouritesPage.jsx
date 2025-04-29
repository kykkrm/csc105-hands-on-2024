import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function FavouritesPage() {
  const [number, setNumber] = useState("");
  const [q, setQ] = useState("");
  const [size, setSize] = useState("");
  

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number && q && size) {
      navigate(`/fav/${number}?q=${q}&size=${size}`);
    }
  };

  return (
    <div>
        <Navbar/>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold text-center mb-4">Favourites Page</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Number Input */}
          <div>
            <label className="block pb-2">Number:</label>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full border p-2 rounded"
            />
            <p className="text-red-500 text-sm mt-1">Expected number, received nan</p>
          </div>

          {/* Q Select */}
          <div>
            <label className="block pb-2">Q:</label>
            <select
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Select</option>
              <option value="love">Love</option>
              <option value="like">Like</option>
            </select>
            <p className="text-red-500 text-sm mt-1">Select either 'love' or 'like'</p>
          </div>

          {/* Size Select */}
          <div>
            <label className="block font-semibold">Size:</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Select</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <p className="text-red-500 text-sm mt-1">Select a valid size</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default FavouritesPage;
