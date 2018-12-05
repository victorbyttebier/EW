{
  const boardSize = 480,
        tileCount = 3,
        tileSize = boardSize / tileCount;

  const markerImages = document.querySelectorAll(`#image`);


  let boardParts, tile = 0;
  let canvas = [], imageData = [], images = [];

  const init = () => {
    const image = new Image();
    image.src = '../assets/dog.jpg';
    image.width = boardSize;
    image.height = boardSize;
    image.addEventListener('load', () => createTiles(image));
    setBoard();
  }

  /*
  Ter info:
  - in createTiles maken we onder andere de nieuwe canvassen (createCanvas) voor de stukjes.
  - in createTileImage (hieronder) ontvangen we de coördinaten van de canvas stukjes.
  We zetten we de nieuwe geshuffelde canvassen om in een image. In de array images zit pngdata. console.log(images);

  De data uit de array images moet de nieuwe src worden in de a-markers > img id="image" data-tile="1" SRC="assets/dog.jpg"
  De 9 markers die nu in de html staan heb ik tussen in de files gestoken zodat je het kan testen (uitprinten).
  Nadien we stukjes mooi erop krijgen, kunnen we onze custom markers in onze webtoepassing verwerken.
  bv. markerImages[0].src = images[0] AKA markerImages[tile].src = images[tile]

  PROBLEEM TO SOLVE: De createTileImage wordt 9 keer uitgevoerd. Er worden 9 dezelfde stukjes getoond op de marker.
  */

  const createTileImage = (image, {imgdata}) => {
    const {x, y} = imgdata;
    canvas[tile].getContext("2d").drawImage(image, x * tileSize, y * tileSize, tileSize, tileSize, 0, 0, tileSize, tileSize);
    images[tile] = canvas[tile].toDataURL("image/png").replace("image/png", "image/octet-stream");

    if(markerImages[tile].dataset.tile == tile){
      console.log(images);
      markerImages[0].src = images[0];
      markerImages[0].src = images[1];
      markerImages[0].src = images[2];
      markerImages[0].src = images[3];
      markerImages[0].src = images[4];
      markerImages[0].src = images[5];
      markerImages[0].src = images[6];
      markerImages[0].src = images[7];
      markerImages[0].src = images[8];
    }
  };

  const createCanvas = tile => {
    //4Dieter: Creëert een nieuwe canvas per tile (x 9) + attributen
    //Waarom nieuwe canvas per tile = image conversie -> https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
    canvas[tile] = document.createElement(`canvas`)
    canvas[tile].setAttribute(`data-tile`, `${tile}`);
    canvas[tile].setAttribute(`width`, tileSize);
    canvas[tile].setAttribute(`height`, tileSize);
    //document.querySelector(`a-scene`).appendChild(canvas[tile]);
  };

  const createTiles = image => {
    for (let i = 0; i < tileCount; ++i) {
      for (let j = 0; j < tileCount; ++j) {
          createCanvas(tile);

          let x = boardParts[i][j].x;
          let y = boardParts[i][j].y;
          imageData[tile] = {imgdata: {x,y}};
          createTileImage(image, imageData[tile]);

          tile++;
      }
    }
  };

  const setBoard = () => {
    boardParts = new Array(tileCount);
    for (let i = 0; i < tileCount; ++i) {
      boardParts[i] = new Array(tileCount);
      for (let j = 0; j < tileCount; ++j) {
        boardParts[i][j] = {};
        boardParts[i][j].x = (tileCount - 1) - i;
        boardParts[i][j].y = (tileCount - 1) - j;
      }
    }
  };

  init();
}
