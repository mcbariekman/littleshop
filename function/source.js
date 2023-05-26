import React, { useState, useEffect } from 'react';

function Crop() {
  const [crop, setCrop] = useState({
    type: null,
    planted: false,
    grown: false,
    harvested: false,
  });
  const [score, setScore] = useState(0);

  function plantCrop(type) {
    if (!crop.planted && !crop.grown && !crop.harvested) {
      setCrop({
        ...crop,
        type,
        planted: true,
      });
      startGrowthTimer();
    }
  }

  function startGrowthTimer() {
    setTimeout(() => {
      if (crop.planted && !crop.grown && !crop.harvested) {
        setCrop({
          ...crop,
          grown: true,
        });
      }
    }, 10000); // 10 seconds for demo purposes
  }

  function harvestCrop() {
    if (crop.grown && !crop.harvested) {
      setCrop({
        ...crop,
        harvested: true,
      });
      setScore(score + 1);
    }
  }

  useEffect(() => {
    updateButtons();
  }, [crop, score]);

  function updateButtons() {
    const currentCropP = document.getElementById("currentCropP");
    const scoreP = document.getElementById("scoreP");
    const plantedP = document.getElementById("plantedP");
    const noCropP = document.getElementById("noCropP");
    const grownP = document.getElementById("grownP");
    const harvestedP = document.getElementById("harvestedP");

    currentCropP.textContent = `Current Crop: ${crop.type ? crop.type : "No crop planted"}`;
    scoreP.textContent = `Score: ${score}`;

    plantedP.textContent = crop.planted && !crop.grown && !crop.harvested ? "Crop planted. Wait for it to grow." : "";
    noCropP.textContent = !crop.planted && !crop.grown && !crop.harvested ? "No crop planted." : "";
    grownP.textContent = crop.grown && !crop.harvested ? "Crop grown. Ready to be harvested." : "";
    harvestedP.textContent = crop.harvested ? "Crop harvested. You can plant a new crop." : "";
  }

  return (
    <div>
      <h2>Crop Farming Game</h2>
      <div>
        <button onClick={() => plantCrop("Wheat")} disabled={crop.planted || crop.grown || crop.harvested}>
          Plant Wheat
        </button>
        <button onClick={() => plantCrop("Corn")} disabled={crop.planted || crop.grown || crop.harvested}>
          Plant Corn
        </button>
      </div>
      <div>
        <button onClick={harvestCrop} disabled={!crop.grown || crop.harvested}>
          Harvest Crop
        </button>
      </div>
      <div>
        <p id="currentCropP"></p>
        <p id="scoreP"></p>
        <p id="plantedP"></p>
        <p id="noCropP"></p>
        <p id="grownP"></p>
        <p id="harvestedP"></p>
      </div>
    </div>
  );
}

export default Crop;
