{
  const canvas = document.getElementById(`canvas`), ctx = canvas.getContext(`2d`);

  const boardSize = canvas.width,
        tileCount = 3,
        tileSize = boardSize / tileCount;

  let boardParts;

  const init = () => {
    const image = new Image();
    image.src = '../assets/dog.jpg';
    image.width = canvas.width;
    image.height = canvas.height;
    image.addEventListener('load', () => drawTiles(image), false);
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
    console.log(image);
    ctx.clearRect ( 0 , 0 , boardSize , boardSize );
    for (let i = 0; i < tileCount; ++i) {
      for (let j = 0; j < tileCount; ++j) {
          let x = boardParts[i][j].x;
          let y = boardParts[i][j].y;
          ctx.drawImage(image, x * tileSize, y * tileSize, tileSize, tileSize,
          i * tileSize, j * tileSize, tileSize, tileSize);
      }
    }
  };

  init();
}
