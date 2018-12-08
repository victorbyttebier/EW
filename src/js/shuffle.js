{
  const markers = document.querySelectorAll(`a-marker`);

  let parts = new Array(9),
    randomArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];;
  const numColsToCut = 3,
    numRowsToCut = 3,
    puzzel = numColsToCut * numRowsToCut - 1;
  let stukken = numColsToCut * numRowsToCut - 1;




  let positionMarkers = [];

  const init = () => {
    //shuffle(randomArray);
    const image = new Image();
    image.src = '../assets/dog.jpg';
    image.addEventListener('load', () => splitImage(image));
    setInterval(() => checkDistance(), 1000);
    console.log(randomArray);




  }

  const checkDistance = () => {

    for (let i = 0; i < markers.length; ++i) {
      positionMarkers[i] = markers[i].object3D;

    }

    //console.log(images[0]);

    console.log('position x', positionMarkers[randomArray[1]].position.x - positionMarkers[randomArray[0]].position.x);
    console.log('position y', positionMarkers[randomArray[1]].position.y - positionMarkers[randomArray[0]].position.y);
    console.log('position x2', positionMarkers[randomArray[2]].position.x - positionMarkers[randomArray[1]].position.x);
    console.log('position y2', positionMarkers[randomArray[2]].position.y - positionMarkers[randomArray[1]].position.y);



    // console.log('rotation x', positionMarkers[1].rotation.x - positionMarkers[0].rotation.x);
    // console.log('rotation y', positionMarkers[1].rotation.y - positionMarkers[0].rotation.y);
    // console.log('rotation z', positionMarkers[1].rotation.z - positionMarkers[0].rotation.z);
  }

  const splitImage = (image) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const partWidth = image.width / numColsToCut;
    const partHeight = image.height / numRowsToCut;


    for (let x = 0; x < numColsToCut; ++x) {
      for (let y = 0; y < numRowsToCut; ++y) {
        canvas.width = partWidth;
        canvas.height = partHeight;
        ctx.drawImage(image, x * partWidth, y * partHeight, partWidth, partHeight, 0, 0, canvas.width, canvas.height);
        parts[8 - stukken] = (canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));

        stukken = stukken - 3;
        if (stukken < 0) {
          stukken = puzzel + stukken;
        }
      }
    }


    markers.forEach((marker, i) => {
      const aImg = document.createElement(`a-image`);

      aImg.setAttribute(`rotation`, `-90 0 0`);
      aImg.setAttribute(`src`, parts[randomArray[i]]);

      marker.appendChild(aImg);

    })
  }

  function shuffle(randomArray) {
    for (let i = randomArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
    }
    return randomArray;
  }



  init();
}
