const crops = {
    gloom: {
      name: 'Gloom',
      growthTime: 5,
      stages: ['Planted', 'Sprout', 'Flower', 'Growth', 'Ripe'],
      images: [
        'assets/gloom/gloom-planted.png',
        'assets/gloom/gloom-sprout.png',
        'assets/gloom/gloom-flower.png',
        'assets/gloom/gloom-growth.png',
        'assets/gloom/gloom-ripe.png',
      ],
    },
  };
  
  function resetCrop(crop) {
    crop.growthStage = 0;
    crop.image = crops[crop.name].images[crop.growthStage];
    console.log(`Reset ${crop.name} to the planted stage.`);
  }
  
  function farmingGame() {
    let farm = [];
    let hasReset = false;
  
    function plantCrop(crop) {
      const selectedCrop = crops[crop];
  
      const newCrop = {
        name: selectedCrop.name,
        growthStage: 0,
        image: selectedCrop.images[0],
      };
  
      farm.push(newCrop);
      console.log(`${selectedCrop.name} planted!`);
    }
  
    function calculatePercentage(stage, totalStages) {
      return ((stage + 1) / totalStages) * 100;
    }
  
    function calculateRemainingTime(stage, totalStages, growthTime) {
      const stagesLeft = totalStages - stage;
      const remainingTime = stagesLeft * growthTime;
      return remainingTime;
    }
  
    function waterCrop(crop) {
      const selectedCrop = crops[crop];
      const currentCrop = farm.find(c => c.name === selectedCrop.name);
  
      if (currentCrop.growthStage < selectedCrop.growthTime) {
        currentCrop.growthStage++;
        currentCrop.image = selectedCrop.images[currentCrop.growthStage];
  
        const percentage = calculatePercentage(currentCrop.growthStage, selectedCrop.growthTime);
        const remainingTime = calculateRemainingTime(
          currentCrop.growthStage,
          selectedCrop.growthTime,
          selectedCrop.growthTime
        );
  
        console.log(
          `Watered ${currentCrop.name}! It is now in the ${selectedCrop.stages[currentCrop.growthStage]} stage. Growth: ${percentage}%. Remaining Time: ${remainingTime} minutes.`
        );
      } else {
        console.log(`${currentCrop.name} is already ripe and ready for harvest!`);
      }
    }
  
    function harvestCrop(crop) {
      const selectedCrop = crops[crop];
      const currentCrop = farm.find(c => c.name === selectedCrop.name);
  
      if (currentCrop.growthStage === selectedCrop.growthTime) {
        console.log(`Harvested ${currentCrop.name}!`);
        // Additional actions for harvesting the crop
        resetCrop(currentCrop);
      } else {
        console.log(`${currentCrop.name} is not ready for harvest yet.`);
      }
    }
  
    function resetCrop(crop) {
      if (!hasReset) {
        crop.growthStage = 0;
        crop.image = crops[crop.name].images[crop.growthStage];
        console.log(`Reset ${crop.name} to the planted stage.`);
        hasReset = true;
      }
    }
  
    plantCrop('gloom');
    waterCrop('gloom');
    waterCrop('gloom');
    waterCrop('gloom');
    waterCrop('gloom');
    harvestCrop('gloom');
    resetCrop(farm[0]);
    waterCrop('gloom');
    waterCrop('gloom');
    waterCrop('gloom');
    waterCrop('gloom');
    harvestCrop('gloom');
  
    // Display final stage image
    farm.forEach(crop => {
      const imageElement = new Image();
      imageElement.src = crop.image;
      document.body.appendChild(imageElement);
    });
  }
  
  farmingGame();
  