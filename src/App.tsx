import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import './App.css';

// Styled Components
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const DateTime = styled.p`
  font-size: 1rem;
`;

// Snake Game Component
const SnakeGame = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [aliveTime, setAliveTime] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const canvasRef = useRef(null);

  useEffect(() => {
    setAliveTime(dateTime);
    const canvas = canvasRef.current;

    const ctx = canvas.getContext('2d');
  
    const cellSize = 20;
    const gridSize = 20;
  
    const snake = [{ x: 10, y: 10 }];
    let food = generateFood();
  
    let direction = 'RIGHT';
  
    function generateFood() {
      const x = Math.floor(Math.random() * gridSize);
      const y = Math.floor(Math.random() * gridSize);
      return { x, y };
    }
  
    function draw(ctx) {
      // Clear the canvas
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
      // Draw the border
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.strokeRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
      // Draw the grid
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          ctx.fillStyle = (i + j) % 2 === 0 ? '#f0f0f0' : '#d0d0d0'; // Alternating colors for a blocky grid
          ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
      }
    
      // Draw the snake
      ctx.fillStyle = 'green';
      snake.forEach((segment) => {
        ctx.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize);
      });
    
      // Draw the food
      ctx.fillStyle = 'red';
      ctx.fillRect(food.x * cellSize, food.y * cellSize, cellSize, cellSize);
    }
  
    function handleKeyPress(event: any) {
      switch (event.key) {
        case 'ArrowUp':
          if (direction === 'DOWN') {
            return;
          } else {
            direction = 'UP'
            break;
          }
        case 'ArrowDown':
          if (direction === 'UP') {
            return;
          } else {
            direction = 'DOWN';
            break;
          }
        case 'ArrowLeft':
          if (direction === 'RIGHT') {
            return;
          } else {
            direction = 'LEFT';
            break;
          }
        case 'ArrowRight':
          if (direction === 'LEFT') {
            return;
          } else {
            direction = 'RIGHT';
            break;
          }
        default:
          break;
      }
    }   
  
    function update() {
      // Update snake position based on the direction
      const head = { ...snake[0] };
      switch (direction) {
        case 'UP':
          head.y = (head.y - 1 + gridSize) % gridSize;
          break;
        case 'DOWN':
          head.y = (head.y + 1) % gridSize;
          break;
        case 'LEFT':
          head.x = (head.x - 1 + gridSize) % gridSize;
          break;
        case 'RIGHT':
          head.x = (head.x + 1) % gridSize;
          break;
        default:
          break;
      }

  // Check for collisions with the walls
  if (head.x < 0 || head.x > gridSize || head.y < 0 || head.y > gridSize) {
    alert('Game over! You hit a wall. I am sure you have time for one more round.');
    window.location.reload(); // Restart the game
    return; // Return early to prevent further processing
  }

  // Check for collisions with the food
  if (head.x === food.x && head.y === food.y) {
    snake.unshift({ ...head }); // Add a new segment to the snake
    food = generateFood(); // Generate a new food
    setAliveTime(new Date());// Update the time
  } else {
    // Check for collisions with the snake itself
    const collided = snake.some((segment) => segment.x === head.x && segment.y === head.y);
    if (collided) {
      alert('Game over! You collided with yourself. I am sure you have time for one more round.');
      window.location.reload(); // Restart the game
      return; // Return early to prevent further processing
    }

    snake.pop(); // Remove the last segment of the snake
  }

  snake.unshift(head); // Add the new head to the snake

  draw(ctx); // Redraw the canvas with the updated positions
}
  
    // Event listeners
    window.addEventListener('keydown', handleKeyPress);
  
    // Game loop
    const intervalId = setInterval(update, 100);
  
    // Cleanup
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <GameContainer>
      <Title>Snake O'Clock</Title>
      <div className="digital-watch">
        <span>{aliveTime.getHours() < 10 ? `0${aliveTime.getHours()}` : aliveTime.getHours()}</span>
        <span className="colon">:</span>
        <span>{aliveTime.getMinutes() < 10 ? `0${aliveTime.getMinutes()}` : aliveTime.getMinutes()}</span>
        <span className="colon">:</span>
        <span>{aliveTime.getSeconds() < 10 ? `0${aliveTime.getSeconds()}` : aliveTime.getSeconds()}</span>
      </div>
      <DateTime>{dateTime.getDate()} | {dateTime.getMonth()+1} | {dateTime.getFullYear()}</DateTime> 
        {/* <Title>Snake O'Clock</Title>
        <Title>{aliveTime.getHours()}:{aliveTime.getMinutes()}:{aliveTime.getSeconds()}</Title>
        <DateTime>{dateTime.getDate()} | {dateTime.getMonth()+1} | {dateTime.getFullYear()}</DateTime>   */}
      <canvas ref={canvasRef} width={400} height={400} />
    </GameContainer>
  );
};

// App Component
function App() {
  return (
    <div className="App">
      <SnakeGame />
    </div>
  );
}

export default App;
