/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// Hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space.)
// Take a look at solversSpec.js to see what the tests are expecting




// Return a matrix (an array of arrays) representing a single nxn chessboard,
// with n rooks placed such that none of them can attack each other.
window.findNRooksSolution = function(n) {
  var solution = new Array(n);
  var found = false;
  var board = new Board({n:n});


  var recurse = function(board,rowI) {
    // If solution
    //   solutionCount++
    if(board.hasAnyRooksConflicts()) {
      return;
    }

    if( rowI === n ) {
      solution = board.allRows();
      found = true;
      return;
    }

    for(var colI = 0; colI < n; ++colI) {
      // Add piece at rowI, i (column)
        // Recurse board
      board.setPiece(rowI, colI, 1);
      recurse(board, rowI + 1)
      if( found ) {
        break;
      }
      board.setPiece(rowI, colI, 0);
    }
  };

  recurse(board, 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// Return the number of nxn chessboards that exist, with n rooks placed such that none
// of them can attack each other.
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});

  if( n === 0 ) {
    return 1;
  }

  var recurse = function(rowI) {
    // If solution
    //   solutionCount++
    if( rowI === n ) {
      solutionCount++;
      return;
    }

    for(var colI = 0; colI < n; ++colI) {
      // Add piece at rowI, i (column)
        // Recurse board
      board.setPiece(rowI,colI,1);

      if(!board.hasAnyRooksConflicts()) {
        recurse(rowI + 1);
      }
      board.setPiece(rowI,colI,0);
    }
  };

  recurse(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// Return a matrix (an array of arrays) representing a single nxn chessboard,
// with n queens placed such that none of them can attack each other.
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var solution = new Array(n);
  var found = false;

  var recurse = function(board,rowI) {
    // If solution
    //   solutionCount++
    if( board.hasAnyQueensConflicts() ) {
      return;
    }

    if( rowI === n ) {
      solution = board.allRows();
      found = true;
      return;
    }

    for(var colI = 0; colI < n; ++colI) {
      // Add piece at rowI, i (column)
        // Recurse board
      board.setPiece(rowI,colI,1);
      recurse(board, rowI + 1);

      if(found) {
        break;
      }

      board.setPiece(rowI, colI, 0);
    }
  };

  recurse(board, 0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// Return the number of nxn chessboards that exist, with n queens placed such that none
// of them can attack each other.
window.countNQueensSolutions = function(n) {
  var board = new Board({n:n});
  var solutionCount = 0;

  if( n === 0 ) {
    return 1;
  }

  var recurse = function(board,rowI) {
    // If solution
    //   solutionCount++
    if(board.hasAnyQueensConflicts()) {
      return;
    }

    if( rowI === n ) {
      solutionCount++;
      return;
    }

    for(var colI = 0; colI < n; ++colI) {
      // Add piece at rowI, i (column)
        // Recurse board
      board.setPiece(rowI, colI, 1);
      recurse(board,rowI+1);
      board.setPiece(rowI, colI, 0);
    }
  };

  recurse(board, 0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
