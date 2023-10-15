function createBoard(length, width, pieces) {

    var board = Array.from({ length }, () =>
      Array.from({ length: width }, () => " ")
    );
  
    
    for (var piece of pieces) {
      var { row, col, value } = piece;
  
      
      if (row >= 0 && row < length && col >= 0 && col < width) {
        board[row][col] = value;
      }
    }
  
    return board;
  }
  

  var length = 3;
  var width = 3;
  var pieces = [
    { row: 0, col: 0, value: "X" },
    { row: 0, col: 1, value: "X" },
    { row: 0, col: 2, value: "0" },
    { row: 1, col: 0, value: "O" },
    { row: 1, col: 2, value: "X" },
    { row: 2, col: 0, value: "X" },
    { row: 2, col: 1, value: "O" },
    { row: 2, col: 2, value: "O" },
  ];
  
  var board = createBoard(length, width, pieces);
  console.table(board);
  