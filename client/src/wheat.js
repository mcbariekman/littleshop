const crops = {
    wheat: {
      name: 'Wheat',
      growthTime: 5,
      stages: ['Planted', 'Sprout', 'Flower', 'Growth', 'Ripe'],
      images: [
        'wheat_planted.png',
        'wheat_sprout.png',
        'wheat_flower.png',
        'wheat_growth.png',
        'wheat_ripe.png',
      ],
    },
  };
  
  function farmingGame() {
    let farm = [];
  
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
  
    function updateGame() {
      farm.forEach(crop => {
        crop.growthStage++;
  
        if (crop.growthStage >= crops[crop.name].growthTime) {
          crop.growthStage = crops[crop.name].growthTime;
        }
  
        crop.image = crops[crop.name].images[crop.growthStage];
        console.log(`${crop.name} is in the ${crops[crop.name].stages[crop.growthStage]} stage.`);
      });
    }
  
    plantCrop('wheat');
  
    for (let i = 0; i < crops['wheat'].growthTime; i++) {
      updateGame();
    }
  
    // Display final stage image
    farm.forEach(crop => {
      const imageElement = new Image();
      imageElement.src = crop.image;
      document.body.appendChild(imageElement);
    });
  }
  
  farmingGame();
  