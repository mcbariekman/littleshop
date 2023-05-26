function Crop() {
  const crop = {
    type: null,
    planted: false,
    grown: false,
    harvested: false,
  };
  let score = 0;

  function plantCrop(type) {
    if (!crop.planted && !crop.grown && !crop.harvested) {
      crop.type = type;
      crop.planted = true;
      startGrowthTimer();
    }
  }

  function startGrowthTimer() {
    setTimeout(() => {
      if (crop.planted && !crop.grown && !crop.harvested) {
        crop.grown = true;
      }
    }, 5000); // 5 seconds for demo purposes, adjust as needed
  }

  function harvestCrop() {
    if (crop.grown && !crop.harvested) {
      crop.harvested = true;
      score++;
    }
  }

  const rootElement = document.getElementById("root");

  const h2 = document.createElement("h2");
  h2.textContent = "Crop Farming Game";
  rootElement.appendChild(h2);

  const plantButtonsDiv = document.createElement("div");

  const wheatButton = document.createElement("button");
  wheatButton.textContent = "Plant Wheat";
  wheatButton.addEventListener("click", () => plantCrop("Wheat"));
  wheatButton.disabled = crop.planted || crop.grown || crop.harvested;
  plantButtonsDiv.appendChild(wheatButton);

  const cornButton = document.createElement("button");
  cornButton.textContent = "Plant Corn";
  cornButton.addEventListener("click", () => plantCrop("Corn"));
  cornButton.disabled = crop.planted || crop.grown || crop.harvested;
  plantButtonsDiv.appendChild(cornButton);

  rootElement.appendChild(plantButtonsDiv);

  const harvestButtonDiv = document.createElement("div");

  const harvestButton = document.createElement("button");
  harvestButton.textContent = "Harvest Crop";
  harvestButton.addEventListener("click", harvestCrop);
  harvestButton.disabled = !crop.grown || crop.harvested;
  harvestButtonDiv.appendChild(harvestButton);

  rootElement.appendChild(harvestButtonDiv);

  const statusDiv = document.createElement("div");

  const currentCropP = document.createElement("p");
  currentCropP.textContent = `Current Crop: ${crop.type ? crop.type : "No crop planted"}`;
  statusDiv.appendChild(currentCropP);

  const scoreP = document.createElement("p");
  scoreP.textContent = `Score: ${score}`;
  statusDiv.appendChild(scoreP);

  if (crop.planted && !crop.grown && !crop.harvested) {
    const plantedP = document.createElement("p");
    plantedP.textContent = "Crop planted. Wait for it to grow.";
    statusDiv.appendChild(plantedP);
  }

  if (!crop.planted && !crop.grown && !crop.harvested) {
    const noCropP = document.createElement("p");
    noCropP.textContent = "No crop planted.";
    statusDiv.appendChild(noCropP);
  }

  if (crop.grown && !crop.harvested) {
    const grownP = document.createElement("p");
    grownP.textContent = "Crop grown. Ready to be harvested.";
    statusDiv.appendChild(grownP);
  }

  if (crop.harvested) {
    const harvestedP = document.createElement("p");
    harvestedP.textContent = "Crop harvested. You can plant a new crop.";
    statusDiv.appendChild(harvestedP);
  }

  rootElement.appendChild(statusDiv);
}

Crop();
