// Define Crop component
function Crop() {
    const [planted, setPlanted] = React.useState(false);
    const [grown, setGrown] = React.useState(false);
    const [harvested, setHarvested] = React.useState(false);
  
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
  
    return (
      <div>
        <button onClick={plantCrop} disabled={planted || grown || harvested}>
          Plant Crop
        </button>
        <button onClick={harvestCrop} disabled={!grown || harvested}>
          Harvest Crop
        </button>
        <div>
          {planted && !grown && !harvested && (
            <p>Crop planted. Wait for it to grow.</p>
          )}
          {!planted && !grown && !harvested && (
            <p>No crop planted.</p>
          )}
          {grown && !harvested && (
            <p>Crop grown. Ready to be harvested.</p>
          )}
          {harvested && (
            <p>Crop harvested. You can plant a new crop.</p>
          )}
        </div>
      </div>
    );
  }
  
  // Render Crop component
  ReactDOM.render(<Crop />, document.getElementById("root"));
  