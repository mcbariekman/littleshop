const crops = {
    potato: {
      name: 'Potato',
      growthTime: 5,
      stages: ['Planted', 'Sprout', 'Flower', 'Growth', 'Ripe'],
      images: [
        'potato_planted.png',
        'potato_sprout.png',
        'potato_flower.png',
        'potato_growth.png',
        'potato_ripe.png',
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
  
    plantCrop('potato');
  
    for (let i = 0; i < crops['potato'].growthTime; i++) {
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
  