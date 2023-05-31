const crops = {
    carrot: {
      name: 'Carrot',
      growthTime: 3,
      image: 'carrot.png', // Image file path for the carrot crop
    },
    corn: {
      name: 'Corn',
      growthTime: 5,
      image: 'corn.png',
    },
    potato: {
      name: 'Potato',
      growthTime: 4,
      image: 'potato.png',
    },
    tomato: {
      name: 'Tomato',
      growthTime: 2,
      image: 'tomato.png',
    },
    wheat: {
      name: 'Wheat',
      growthTime: 6,
      image: 'wheat.png',
    },
  };
  
  function farmingGame() {
    let farm = [];
  
    function plantCrop(crop) {
      const selectedCrop = crops[crop];
  
      const newCrop = {
        name: selectedCrop.name,
        growthStage: 0,
        image: selectedCrop.image,
      };
  
      farm.push(newCrop);
      console.log(`${selectedCrop.name} planted!`);
    }
  
    function updateGame() {
      farm.forEach(crop => {
        crop.growthStage++;
  
        if (crop.growthStage === crops[crop.name].growthTime) {
          console.log(`${crop.name} is ready for harvest!`);
        }
      });
    }
  
    plantCrop('carrot');
    plantCrop('corn');
    plantCrop('potato');
    plantCrop('tomato');
    plantCrop('wheat');
  
    updateGame();
  
    // Display crops with images
    farm.forEach(crop => {
      const imageElement = new Image();
      imageElement.src = crop.image;
      document.body.appendChild(imageElement);
    });
  }
  
  farmingGame();
  