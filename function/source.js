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
    plantButtonsDiv.appendChild(wheatButton);

    const cornButton = document.createElement("button");
    cornButton.textContent = "Plant Corn";
    plantButtonsDiv.appendChild(cornButton);

    const harvestButtonDiv = document.createElement("div");

    const harvestButton = document.createElement("button");
    harvestButton.textContent = "Harvest Crop";
    harvestButtonDiv.appendChild(harvestButton);

    const statusDiv = document.createElement("div");

    const currentCropP = document.createElement("p");
    statusDiv.appendChild(currentCropP);

    const scoreP = document.createElement("p");
    statusDiv.appendChild(scoreP);

    const plantedP = document.createElement("p");
    statusDiv.appendChild(plantedP);

    const noCropP = document.createElement("p");
    statusDiv.appendChild(noCropP);

    const grownP = document.createElement("p");
    statusDiv.appendChild(grownP);

    const harvestedP = document.createElement("p");
    statusDiv.appendChild(harvestedP);

    rootElement.appendChild(plantButtonsDiv);
    rootElement.appendChild(harvestButtonDiv);
    rootElement.appendChild(statusDiv);

    // Event listeners
    wheatButton.addEventListener("click", () => {
      plantCrop("Wheat");
      updateButtons();
    });

    cornButton.addEventListener("click", () => {
      plantCrop("Corn");
      updateButtons();
    });

    harvestButton.addEventListener("click", () => {
      harvestCrop();
      updateButtons();
    });

    // Update button states and status messages
    function updateButtons() {
      wheatButton.disabled = crop.planted || crop.grown || crop.harvested;
      cornButton.disabled = crop.planted || crop.grown || crop.harvested;
      harvestButton.disabled = !crop.grown || crop.harvested;

      currentCropP.textContent = `Current Crop: ${crop.type ? crop.type : "No crop planted"}`;
      scoreP.textContent = `Score: ${score}`;

      plantedP.textContent = crop.planted && !crop.grown && !crop.harvested ? "Crop planted. Wait for it to grow." : "";
      noCropP.textContent = !crop.planted && !crop.grown && !crop.harvested ? "No crop planted." : "";
      grownP.textContent = crop.grown && !crop.harvested ? "Crop grown. Ready to be harvested." : "";
      harvestedP.textContent = crop.harvested ? "Crop harvested. You can plant a new crop." : "";
    }

    updateButtons();
  }

  Crop();