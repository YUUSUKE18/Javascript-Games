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
  //const scoreDisplay = document.getElementById("score");
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

  function checkRowForThree() {
    for (i = 0; i < 61; i++) {
      let rowOfThree = [i, i + 1, i + 2];
      let decideColor = squares[i].style.backgroundColor;
      const isBlank = squares[i].style.backgroundColor === "";

      if (
        rowOfThree.every(
          (index) =>
            squares[index].style.backgroundColor === decideColor && !isBlank
        )
      ) {
        score += 3;
        rowOfThree.forEach((index) => {
          squares[index].style.backgroundColor = "";
        });
      }
    }
  }
  window.setInterval(function () {
    checkRowForThree();
  }, 100);
});
