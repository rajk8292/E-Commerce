import React from "react";

export default function HeroBanner() {
  return (
    <div className="bg-blue-400 text-white p-6 md:p-10 rounded-md relative overflow-hidden mb-6">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">
          Adidas Men Running <br /> Sneakers
        </h2>
        <p className="mt-2">Performance and design. Taken right to the edge.</p>
        <button className="mt-4 px-4 py-2 bg-white text-blue-600 font-semibold rounded">
          Shop Now
        </button>
      </div>
      <img
        src="https://i.imgur.com/1Q9Z1Zm.png"
        alt="Sneaker"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-40 md:w-60"
      />
    </div>
  );
}
