// Define Crop component
function Crop() {
    const [planted, setPlanted] = useState(false);
    const [grown, setGrown] = useState(false);
    const [harvested, setHarvested] = useState(false);
  
    function plantCrop() {
      if (!planted && !grown && !harvested) {
        setPlanted(true);
      }
    }
  
    function harvestCrop() {
      if (grown && !harvested) {
        setHarvested(true);
      }
    }
  
    const cropStatus = () => {
      if (planted && !grown && !harvested) {
        return "Crop planted. Wait for it to grow.";
      } else if (!planted && !grown && !harvested) {
        return "No crop planted.";
      } else if (grown && !harvested) {
        return "Crop grown. Ready to be harvested.";
      } else if (harvested) {
        return "Crop harvested. You can plant a new crop.";
      }
    };
  
    const buttonDisabled = () => {
      return (planted || grown || harvested);
    }
  
    const buttonHarvestDisabled = () => {
      return (!grown || harvested);
    }
  
    const element = document.createElement("div");
  
    const plantButton = document.createElement("button");
    plantButton.textContent = "Plant Crop";
    plantButton.addEventListener("click", plantCrop);
    plantButton.disabled = buttonDisabled();
  
    const harvestButton = document.createElement("button");
    harvestButton.textContent = "Harvest Crop";
    harvestButton.addEventListener("click", harvestCrop);
    harvestButton.disabled = buttonHarvestDisabled();
  
    const statusDiv = document.createElement("div");
    const statusMessage = document.createElement("p");
    statusMessage.textContent = cropStatus();
    statusDiv.appendChild(statusMessage);
  
    element.appendChild(plantButton);
    element.appendChild(harvestButton);
    element.appendChild(statusDiv);
  
    return element;
  }
  
  // Render Crop component
  const rootElement = document.getElementById("root");
  rootElement.appendChild(Crop());
  