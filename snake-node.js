import readline from"readline";


readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);


const WIDTH = 20;
const HEIGHT = 10;
const EMPTY = " ";
const SNAKE = "█";
const FOOD = "●";


let snake = [{ x: 5, y: 5 }];
let food = { x: 10, y: 5 };
let direction = "right";
let gameOver = false;
let score = 0;


function createBoard() {
  return Array(HEIGHT)
    .fill()
    .map(() => Array(WIDTH).fill(EMPTY));
}


function draw() {
  const board = createBoard();

  
  snake.forEach((segment) => {
    board[segment.y][segment.x] = SNAKE;
  });

  
  board[food.y][food.x] = FOOD;

  
  console.clear();

  
  console.log(`Score: ${score}`);

  
  console.log("┌" + "─".repeat(WIDTH * 2) + "┐");
  board.forEach((row) => {
    console.log("│" + row.join(" ") + " │");
  });
  console.log("└" + "─".repeat(WIDTH * 2) + "┘");
}


function generateFood() {
  while (true) {
    const newFood = {
      x: Math.floor(Math.random() * WIDTH),
      y: Math.floor(Math.random() * HEIGHT),
    };

    
    if (
      !snake.some(
        (segment) => segment.x === newFood.x && segment.y === newFood.y
      )
    ) {
      food = newFood;
      break;
    }
  }
}


function update() {
  if (gameOver) return;

  
  const head = { ...snake[0] };
  switch (direction) {
    case "up":
      head.y--;
      break;
    case "down":
      head.y++;
      break;
    case "left":
      head.x--;
      break;
    case "right":
      head.x++;
      break;
  }

  
  if (
    head.x < 0 ||
    head.x >= WIDTH ||
    head.y < 0 ||
    head.y >= HEIGHT ||
    snake.some((segment) => segment.x === head.x && segment.y === head.y)
  ) {
    gameOver = true;
    console.log("\nGame Over! Final Score:", score);
    process.exit();
  }

  
  snake.unshift(head);

  
  if (head.x === food.x && head.y === food.y) {
    score++;
    generateFood();
  } else {
    snake.pop();
  }
}


process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit();
  }

  switch (key.name) {
    case "up":
      if (direction !== "down") direction = "up";
      break;
    case "down":
      if (direction !== "up") direction = "down";
      break;
    case "left":
      if (direction !== "right") direction = "left";
      break;
    case "right":
      if (direction !== "left") direction = "right";
      break;
  }
});


function gameLoop() {
  update();
  draw();
}


console.log("Snake Game - Use arrow keys to move, Ctrl+C to exit");
setInterval(gameLoop, 100);
 