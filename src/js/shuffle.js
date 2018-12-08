{
  const markers = document.querySelectorAll(`a-marker`);

  let parts = new Array(9),
    randomArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];;
  const numColsToCut = 3,
    numRowsToCut = 3,
    puzzel = numColsToCut * numRowsToCut - 1,
    tolerantie = 1.9;
  let stukken = numColsToCut * numRowsToCut - 1;

  let controle = new Array(6);

  let positionMarkers = [];

  const init = () => {
    shuffle(randomArray);
    const image = new Image();
    image.src = '../assets/dog.jpg';
    image.addEventListener('load', () => splitImage(image));

    console.log(randomArray);
    console.log(positionMarkers);

    setInterval(() => checkDistance(), 1000);



  }


  const checkDistance = () => {

    for (let i = 0; i < markers.length; ++i) {
      positionMarkers[i] = markers[i].object3D;

    }
    //deze if zorgt ervoor dat er zeker 2 markers moeten ingeladen zijn voor je gaat checken dit zorgt ervoor dat je markers al een waarde hebben vooraleer je de tolerantie gaat bereken 0-0 < tolerantie
    if (positionMarkers[randomArray[0]].position.x - positionMarkers[randomArray[8]].position.x !== 0) {
      for (let i = 0; i < numRowsToCut; ++i) {
        //door de randomArray weten we welke stukken waar zijn geplaatst daardoor weten we ook welke langst elkaar horen te liggen
        //eerst checken we of de rijen in de juste positie staan maar dan moeten we ook nog zien of de columns in de juste orde staan
        //de tweede lijn in de if state is voor de rotatie te zien ten opzichte van elkaar
        if (Math.abs(positionMarkers[randomArray[0 + (3 * i)]].position.x - positionMarkers[randomArray[1 + (3 * i)]].position.x) < tolerantie && Math.abs(positionMarkers[randomArray[1 + (3 * i)]].position.x - positionMarkers[randomArray[2 + (3 * i)]].position.x) < tolerantie
          && Math.abs(positionMarkers[randomArray[0 + (3 * i)]].rotation.x - positionMarkers[randomArray[1 + (3 * i)]].rotation.x) < tolerantie && Math.abs(positionMarkers[randomArray[1 + (3 * i)]].rotation.x - positionMarkers[randomArray[2 + (3 * i)]].rotation.x) < tolerantie) {
          controle[i] = true;
        } else {
          controle[i] = false;
        }
      }

      // hier checken we de culumns
      for (let i = 0; i < numColsToCut; ++i) {
        if (Math.abs(positionMarkers[randomArray[i]].position.y - positionMarkers[randomArray[3 + i]].position.y) < tolerantie && Math.abs(positionMarkers[randomArray[3 + i]].position.y - positionMarkers[randomArray[6 + i]].position.y) < tolerantie
          && Math.abs(positionMarkers[randomArray[i]].rotation.y - positionMarkers[randomArray[3 + i]].rotation.y) < tolerantie && Math.abs(positionMarkers[randomArray[3 + i]].rotation.y - positionMarkers[randomArray[6 + i]].rotation.y) < tolerantie) {
          controle[3 + i] = true;
        } else {
          controle[3 + i] = false;
        }
      }
      //console.log('controle', controle);
      //als alle rijen en collomen true zijn dan heb je de puzzel opgelost!
      if (controle.every(checkArray)) {
        console.log('SOLVED!!!!!!!');

      }
    }
  }

  function checkArray(check) {

    return check == true;
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
