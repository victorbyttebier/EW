{
  const dog = document.querySelector(`#dogImage`);

  const boardSize = 480,
        tileCount = 3,
        tileSize = boardSize / tileCount;

  let boardParts, tile = 0;
  let canvas = [], imageData = [], images = [];

  const init = () => {
    const image = new Image();
    image.src = '../assets/dog.jpg';
    image.width = boardSize;
    image.height = boardSize;
    image.addEventListener('load', () => createTiles(image), false);
    setBoard();
  }

  const createTileImage = (image, {imgdata}) => {
    const {x, y} = imgdata;
    canvas[tile].getContext("2d").drawImage(image, x * tileSize, y * tileSize, tileSize, tileSize, 0, 0, tileSize, tileSize);
    //save canvas as image
    dog.src = images[0];
    images[tile] = canvas[tile].toDataURL("image/png").replace("image/png", "image/octet-stream");
  };

  const createCanvas = tile => {
    //4Dieter: Creëert een nieuwe canvas per tile (x 9) + attributen
    //Waarom nieuwe canvas per tile = image conversie -> https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
    canvas[tile] = document.createElement(`canvas`)
    canvas[tile].setAttribute(`data-tile`, `${tile}`);
    canvas[tile].setAttribute(`width`, tileSize);
    canvas[tile].setAttribute(`height`, tileSize);
  };

  const createTiles = image => {
    for (let i = 0; i < tileCount; ++i) {
      for (let j = 0; j < tileCount; ++j) {
          createCanvas(tile);

          let x = boardParts[i][j].x;
          let y = boardParts[i][j].y;
          imageData[tile] = {imgdata: {x,y}};
          createTileImage(image,imageData[tile]);

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
