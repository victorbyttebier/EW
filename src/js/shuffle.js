{
  const boardSize = 480,
        tileCount = 3,
        tileSize = boardSize / tileCount;

  const markers = document.querySelectorAll(`a-marker`);

  const imgSettings = {
    width: 1,
    height: 1,
  }

  let boardParts, tile = 0, solved = false;
  let canvas = [], imageData = [], images = [];

  const init = () => {
    const image = new Image();
    image.src = '../assets/dog.jpg';
    image.width = boardSize;
    image.height = boardSize;
    image.addEventListener('load', () => createTiles(image));
    setBoard();
    setInterval(() => checkSolved(), 1000);
  }

  const checkSolved = () => {
    let flag = true;
    for (let i = 0; i < tileCount; ++i) {
      for (let j = 0; j < tileCount; ++j) {
        if (boardParts[i][j].x != i || boardParts[i][j].y != j) {
          flag = false;
        }
      }
    }
    solved = flag;
    if (solved) {
      setTimeout(function() {alert("You solved it!");}, 500);
    }else {
      console.log(`not solved`);
    }
  };


  const createTileImage = (image, {imgdata}) => {
    const {x, y} = imgdata;
    canvas[tile].getContext("2d").drawImage(image, x * tileSize, y * tileSize, tileSize, tileSize, 0, 0, tileSize, tileSize);
    images[tile] = canvas[tile].toDataURL("image/png").replace("image/png", "image/octet-stream");

    markers.forEach( (m, i) => {
      if(i === tile){
        const aImg = document.createElement(`a-image`);

        aImg.setAttribute(`width`, imgSettings.width);
        aImg.setAttribute(`height`, imgSettings.height);
        aImg.setAttribute(`rotation`, `-90 0 0`);
        aImg.setAttribute(`src`, images[i]);

        m.appendChild(aImg);
      }
    })

  };

  const createCanvas = tile => {
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
    solved = false;
  };

  init();
}
