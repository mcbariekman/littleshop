import React, { useState } from 'react';

function SeedShop() {
  const [seeds, setSeeds] = useState([
    { id: 1, name: "Wheat", price: 10 },
    { id: 2, name: "Corn", price: 15 },
    { id: 3, name: "Tomato", price: 20 },
  ]);
  const [balance, setBalance] = useState(100);
  const [selectedSeed, setSelectedSeed] = useState(null);

  function buySeed(seed) {
    if (seed.price <= balance) {
      setBalance(balance - seed.price);
      setSelectedSeed(seed);
    } else {
      alert("Insufficient balance to buy this seed.");
    }
  }

  return (
    <div>
      <h2>Seed Shop</h2>
      <p>Balance: {balance}</p>
      <div>
        <h3>Seeds:</h3>
        <ul>
          {seeds.map((seed) => (
            <li key={seed.id}>
              {seed.name} - Price: {seed.price}
              <button onClick={() => buySeed(seed)}>Buy</button>
            </li>
          ))}
        </ul>
      </div>
      {selectedSeed && (
        <div>
          <h3>Selected Seed:</h3>
          <p>Name: {selectedSeed.name}</p>
          <p>Price: {selectedSeed.price}</p>
        </div>
      )}
    </div>
  );
}

export default SeedShop;
