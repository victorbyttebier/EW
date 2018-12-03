{
  // const canvas = document.getElementById(`canvas`), ctx = canvas.getContext(`2d`);
  // const canvas2 = document.getElementById(`canvas2`), ctx2 = canvas2.getContext(`2d`);

  const boardSize = 480,
        tileCount = 3,
        tileSize = boardSize / tileCount;

  let boardParts;
  let newCanvas = new Array();

  const init = () => {
    const image = new Image();
    image.src = '../assets/dog.jpg';
    image.width = 480/3;
    image.height = 480/3;
    image.addEventListener('load', () => drawTiles(image));
    setBoard();
  }

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

  const drawTiles = (image) => {
    let loopCounter = 1;
    for (let i = 0; i < tileCount; ++i) {
      for (let j = 0; j < tileCount; ++j) {
          let x = boardParts[i][j].x;
          let y = boardParts[i][j].y;
          const imageData = {'tileCoord': {x,y, i, j}};
          createCanvas(imageData, loopCounter);
          loopCounter++;
      }
    }
  };

  const createCanvas = (imageData, loopCounter) => {
    newCanvas[loopCounter] = document.createElement(`canvas`)
    newCanvas[loopCounter].setAttribute(`id`, `canvas${loopCounter}`);
    newCanvas[loopCounter].setAttribute(`width`, 160);
    newCanvas[loopCounter].setAttribute(`height`, 160);
    console.log(newCanvas[loopCounter]);
    //ctx.drawImage(image, 0, 0);
    /*ctx.drawImage(image, x * tileSize, y * tileSize, tileSize, tileSize,
    i * tileSize, j * tileSize, tileSize, tileSize);*/
  };


  init();
}
