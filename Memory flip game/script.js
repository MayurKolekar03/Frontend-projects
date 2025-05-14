const emojis = ['🍕','🍩','🍔','🍟','🍎','🍓','🍇','🍉'];
let cardValues = [];
let flippedCards = [];
let lockBoard = false;
let score = 0;
let moves = 0;
let startTime;
let timerInterval;

function startGame() {
  const board = document.getElementById("gameBoard");
  board.innerHTML = "";
  cardValues = [...emojis, ...emojis].sort(() => 0.5 - Math.random());
  flippedCards = [];
  lockBoard = false;
  score = 0;
  moves = 0;

  document.getElementById("score").textContent = "Score: " + score;
  document.getElementById("moves").textContent = "Moves: " + moves;
  document.getElementById("timer").textContent = "Time: 00:00";

  if (timerInterval) clearInterval(timerInterval);
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);

  cardValues.forEach((emoji, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.emoji = emoji;

    card.innerHTML = `
      <div class="front">${emoji}</div>
      <div class="back">?</div>
    `;

    card.addEventListener("click", () => handleFlip(card));
    board.appendChild(card);
  });
}

function handleFlip(card) {
  if (lockBoard || flippedCards.includes(card) || card.classList.contains("matched")) return;

  card.classList.add("flip");
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    moves++;
    document.getElementById("moves").textContent = "Moves: " + moves;
    lockBoard = true;
    const [first, second] = flippedCards;

    if (first.dataset.emoji === second.dataset.emoji) {
      score++;
      document.getElementById("score").textContent = "Score: " + score;
      first.classList.add("matched");
      second.classList.add("matched");
      flippedCards = [];
      lockBoard = false;

      if (score === emojis.length) {
        clearInterval(timerInterval);
        alert(`Game Over! Your score: ${score}, Moves: ${moves}, Time: ${document.getElementById("timer").textContent}`);
      }
    } else {
      setTimeout(() => {
        first.classList.remove("flip");
        second.classList.remove("flip");
        flippedCards = [];
        lockBoard = false;
      }, 1000);
    }
  }
}

function updateTimer() {
  const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  document.getElementById("timer").textContent = `Time: ${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

startGame();
