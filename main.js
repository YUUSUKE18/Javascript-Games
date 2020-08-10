document.addEventListener("DOMContentLoaded", () => {
  // const grid = document.querySelector(".grid");
  // const width = 8;
  // const squares = [];

  // const candyColors = ["red", "yellow", "green", "orange", "blue", "purple"];
  // //Board Area
  // function createBoard() {
  //   for (let i = 0; i < width * width; i++) {
  //     const square = document.createElement("div");
  //     square.setAttribute("draggable", true);
  //     square.setAttribute("id", i);
  //     let randomColor = Math.floor(Math.random() * candyColors.length);
  //     square.style.backgroundColor = candyColors[randomColor];
  //     grid.appendChild(square);
  //     squares.push(square);
  //   }
  // }

  // createBoard();

  // // Draggable Squares
  // let colorBeingDragged;
  // let colorBeingReplaced;
  // let squareIdBeingDragged;
  // let squareIdBeingReplaced;

  // squares.forEach((square) => square.addEventListener("dragstart", dragStart));
  // squares.forEach((square) => square.addEventListener("dragend", dragEnd));
  // squares.forEach((square) => square.addEventListener("dragover", dragOver));
  // squares.forEach((square) => square.addEventListener("dragenter", dragEnter));
  // squares.forEach((square) => square.addEventListener("dragleave", dragLeave));
  // squares.forEach((square) => square.addEventListener("drop", dragDrop));

  // function dragStart() {
  //   colorBeingDragged = this.style.backgroundColor;
  //   squareIdBeginDragged = parseInt(this.id);
  //   console.log(colorBeingDragged);
  //   console.log(this.id, "dragstart");
  // }

  // function dragOver(e) {
  //   e.preventDefault();
  //   console.log(this.id, "dragover");
  // }
  // function dragEnter(e) {
  //   e.preventDefault();
  //   console.log(this.id, "dragenter");
  // }
  // function dragLeave() {
  //   console.log(this.id, "dragleave");
  // }
  // function dragDrop() {
  //   //console.log(this.id, "dragdrop");
  //   colorBeingReplaced = this.style.backgroundColor;
  //   squareIdBeingReplaced = parseInt(this.id);
  //   this.style.backgroundColor = colorBeingDragged;
  //   squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced;
  // }

  // function dragEnd() {
  //   console.log(this.id, "dragend");
  //   let validMoves = [
  //     squareIdBeingDragged - 1,
  //     squareIdBeingDragged - width,
  //     squareIdBeingDragged + 1,
  //     squareIdBeingDragged + width,
  //   ];

  //   let validMove = validMoves.includes(squareIdBeingReplaced);
  //   if (squareIdBeingReplaced && validMove) {
  //     squareIdBeingReplaced = null;
  //   } else if (squareIdBeingReplaced && !validMove) {
  //     squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced;
  //     squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged;
  //   } else {
  //     squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged;
  //   }
  // }
  const grid = document.querySelector(".grid");
  const scoreDisplay = document.getElementById("score");
  const width = 8;
  const squares = [];
  let score = 0;

  const candyColors = ["yellow", "red", "blue", "purple"];

  //create your board
  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute("draggable", true);
      square.setAttribute("id", i);
      let randomColor = Math.floor(Math.random() * candyColors.length);
      square.style.backgroundColor = candyColors[randomColor];
      grid.appendChild(square);
      squares.push(square);
    }
  }
  createBoard();

  // Dragging the Candy
  let colorBeingDragged;
  let colorBeingReplaced;
  let squareIdBeingDragged;
  let squareIdBeingReplaced;

  squares.forEach((square) => square.addEventListener("dragstart", dragStart));
  squares.forEach((square) => square.addEventListener("dragend", dragEnd));
  squares.forEach((square) => square.addEventListener("dragover", dragOver));
  squares.forEach((square) => square.addEventListener("dragenter", dragEnter));
  squares.forEach((square) => square.addEventListener("drageleave", dragLeave));
  squares.forEach((square) => square.addEventListener("drop", dragDrop));

  function dragStart() {
    colorBeingDragged = this.style.backgroundColor;
    squareIdBeingDragged = parseInt(this.id);
    // this.style.backgroundImage = ''
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
  }

  function dragLeave() {
    this.style.backgroundImage = "";
  }

  function dragDrop() {
    colorBeingReplaced = this.style.backgroundColor;
    squareIdBeingReplaced = parseInt(this.id);
    this.style.backgroundColor = colorBeingDragged;
    squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced;
    squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced;
  }

  function dragEnd() {
    //What is a valid move?
    let validMoves = [
      squareIdBeingDragged - 1,
      squareIdBeingDragged - width,
      squareIdBeingDragged + 1,
      squareIdBeingDragged + width,
    ];
    let validMove = validMoves.includes(squareIdBeingReplaced);

    if (squareIdBeingReplaced && validMove) {
      squareIdBeingReplaced = null;
    } else if (squareIdBeingReplaced && !validMove) {
      squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced;
      squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged;
    } else
      squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged;
  }

  function moveDown() {
    for (i = 0; i < 55; i++) {
      if (squares[i + width].style.backgroundColor === "") {
        square[i + width].style.backgroundColor =
          squares[i].style.backgroundColor;
        squares[i].style.backgroundColor = "";
        const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
        const isFirstRow = firstRow.includes(i);
        if (isFirstRow && squares[i].style.backgroundColor === "") {
          let randomColor = Math.random() * candyColors.length();
          squares[i].style.backgroundColor = candyColors[randomColor];
        }
      }
    }
  }

  function checkRowForThree() {
    for (i = 0; i < 61; i++) {
      let rowOfThree = [i, i + 1, i + 2];
      let decideColor = squares[i].style.backgroundColor;
      const isBlank = squares[i].style.backgroundColor === "";

      const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55];
      if (notValid.includes(i)) continue;
      if (
        rowOfThree.every(
          (index) =>
            squares[index].style.backgroundColor === decideColor && !isBlank
        )
      ) {
        score += 3;
        scoreDisplay.innerHTML = score;
        rowOfThree.forEach((index) => {
          squares[index].style.backgroundColor = " ";
        });
      }
    }
  }

  checkRowForThree();

  function checkColumnForThree() {
    for (i = 0; i < 47; i++) {
      let colOfThree = [i, i + width, i + width * 2];
      let decideColor = squares[i].style.backgroundColor;
      const isBlank = squares[i].style.backgroundColor === " ";

      if (
        colOfThree.every(
          (index) =>
            squares[index].style.backgroundColor === decideColor && !isBlank
        )
      ) {
        score += 3;
        scoreDisplay.innerHTML = score;
        colOfThree.forEach((index) => {
          squares[index].style.backgroundColor = " ";
        });
      }
    }
  }

  checkColumnForThree();

  function checkRowForFour() {
    for (i = 0; i < 60; i++) {
      let rowOfFour = [i, i + 1, i + 2, i + 3];
      let decideColor = squares[i].style.backgroundColor;
      const isBlank = squares[i].style.backgroundColor === "";

      const notValid = [
        5,
        6,
        7,
        13,
        14,
        15,
        21,
        22,
        23,
        29,
        30,
        31,
        37,
        38,
        39,
        45,
        46,
        47,
        53,
        54,
        55,
      ];
      if (notValid.includes(i)) continue;
      if (
        rowOfFour.every(
          (index) =>
            squares[index].style.backgroundColor === decideColor && !isBlank
        )
      ) {
        score += 4;
        scoreDisplay.innerHTML = score;
        rowOfFour.forEach((index) => {
          squares[index].style.backgroundColor = " ";
        });
      }
    }
  }

  checkRowForFour();

  function checkColumnForFour() {
    for (i = 0; i < 47; i++) {
      let colOfFour = [i, i + width, i + width * 2, i + width * 3];
      let decideColor = squares[i].style.backgroundColor;
      const isBlank = squares[i].style.backgroundColor === " ";

      if (
        colOfFour.every(
          (index) =>
            squares[index].style.backgroundColor === decideColor && !isBlank
        )
      ) {
        score += 4;
        scoreDisplay.innerHTML = score;
        colOfFour.forEach((index) => {
          squares[index].style.backgroundColor = " ";
        });
      }
    }
  }

  checkColumnForFour();

  window.setInterval(function () {
    moveDown();
    checkRowForThree();
    checkColumnForThree();
    checkRowForFour();
    checkColumnForFour();
  }, 100);
});
