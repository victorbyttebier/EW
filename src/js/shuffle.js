{
  // const canvas = document.getElementById(`canvas`), ctx = canvas.getContext(`2d`);
  // const canvas2 = document.getElementById(`canvas2`), ctx2 = canvas2.getContext(`2d`);

  const boardSize = 480,
        tileCount = 3,
        tileSize = boardSize / tileCount;

  let boardParts, tile = 0;
  let canvas = [], ctx = [], imageData = [];

  const init = () => {
    const image = new Image();
    image.src = '../assets/dog.jpg';
    image.width = boardSize;
    image.height = boardSize;
    image.addEventListener('load', () => createTiles(image), false);
    setBoard();
  }

  const createTileImage = (image, {imgdata}) => {
    const {x, y, i, j} = imgdata;
    // ctx[tile]
    //   .drawImage(image, x * tileSize, y * tileSize, tileSize, tileSize,i * tileSize, j * tileSize, tileSize, tileSize);
  };

  const createCanvas = tile => {
    //4Dieter: Creëert een nieuwe canvas per tile (x 9) + attributen
    //Waarom nieuwe canvas per tile = image conversie -> https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
    canvas[tile] = document.createElement(`canvas`)
    canvas[tile].setAttribute(`data-tile`, `${tile}`);
    canvas[tile].setAttribute(`width`, boardSize);
    canvas[tile].setAttribute(`height`, boardSize);
    ctx[tile] = canvas[tile].getContext('2d');
    document.querySelector(`a-scene`).appendChild(canvas[tile]);
  };

  const createTiles = image => {
    for (let i = 0; i < tileCount; ++i) {
      for (let j = 0; j < tileCount; ++j) {
          createCanvas(tile);

          let x = boardParts[i][j].x;
          let y = boardParts[i][j].y;
          //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
          ctx[0].drawImage(image, 0,0);
          ctx[1].drawImage(image, 0,0);
          //ctx[1].drawImage(image, x * tileSize, y * tileSize, tileSize, tileSize,i * tileSize, j * tileSize, tileSize, tileSize);
          // imageData[tile] = {imgdata: {x,y, i, j}};
          // createTileImage(image, imageData[tile]);

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
