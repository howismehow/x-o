const squares = document.querySelectorAll('.square');
const resetBtn = document.querySelector('#reset');
let player = 'X';
let gameOver = false;

function checkForWin() {
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winCombos.length; i++) {
    const [a, b, c] = winCombos[i];
    if (squares[a].textContent === squares[b].textContent && squares[b].textContent === squares[c].textContent && squares[a].textContent !== '') {
      gameOver = true;
      squares[a].classList.add('winner');
      squares[b].classList.add('winner');
      squares[c].classList.add('winner');
      alert(`${player} wins!`);
      break;
    }
  }
}

function resetGame() {
  player = 'X';
  gameOver = false;
  squares.forEach(square => {
    square.textContent = '';
    square.classList.remove('winner');
  });
}

function handleClick() {
  if (!gameOver && this.textContent === '') {
    this.textContent = player;
    checkForWin();
    player = player === 'X' ? 'O' : 'X';
  }
}

squares.forEach(square => {
  square.addEventListener('click', handleClick);
});

resetBtn.addEventListener('click', resetGame);