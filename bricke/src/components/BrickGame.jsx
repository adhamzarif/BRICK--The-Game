import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function BrickGame({ closeGame }) {
  const canvasRef = useRef(null);

  // React State
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [time, setTime] = useState(60);

  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // Mutable refs (used inside animation loop)
  const scoreRef = useRef(0);
  const livesRef = useRef(3);
  const timeRef = useRef(60);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationId;
    let basketX = canvas.width / 2 - 60;

    let bricks = [];

    function spawnBrick() {
      if (gameOver || gameWon) return;

      bricks.push({
        x: Math.random() * (canvas.width - 60),
        y: -30,
        w: 55,
        h: 25,
        speed: 2 + Math.random() * 2,
      });
    }

    const brickSpawner = setInterval(spawnBrick, 900);

    const timer = setInterval(() => {
      if (gameOver || gameWon) return;

      setTime((prev) => {
        const next = prev - 1;

        timeRef.current = next;

        if (next <= 0) {
          clearInterval(timer);
          clearInterval(brickSpawner);
          setGameWon(true);
          return 0;
        }

        return next;
      });
    }, 1000);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#191919";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Game Over Screen
      if (gameOver) {
        ctx.fillStyle = "white";
        ctx.font = "bold 52px Arial";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
        return;
      }

      // Win Screen
      if (gameWon) {
        ctx.fillStyle = "gold";
        ctx.font = "bold 52px Arial";
        ctx.textAlign = "center";
        ctx.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);
        return;
      }

      // Draw Basket
      ctx.fillStyle = "#ff3333";
      ctx.fillRect(basketX, 450, 120, 20);
            // Draw & Update Bricks
      bricks = bricks.filter((brick) => {
        brick.y += brick.speed;

        // Draw brick
        ctx.fillStyle = "#c0392b";
        ctx.fillRect(brick.x, brick.y, brick.w, brick.h);

        // Brick outline
        ctx.strokeStyle = "#ff8a80";
        ctx.lineWidth = 2;
        ctx.strokeRect(brick.x, brick.y, brick.w, brick.h);

        // Brick middle line
        ctx.beginPath();
        ctx.moveTo(brick.x, brick.y + brick.h / 2);
        ctx.lineTo(brick.x + brick.w, brick.y + brick.h / 2);
        ctx.stroke();

        // Catch brick
        if (
          brick.y + brick.h >= 450 &&
          brick.y <= 470 &&
          brick.x + brick.w >= basketX &&
          brick.x <= basketX + 120
        ) {
          scoreRef.current += 10;
          setScore(scoreRef.current);
          return false;
        }

        // Miss brick
        if (brick.y > canvas.height) {
          livesRef.current--;

          if (livesRef.current < 0) livesRef.current = 0;

          setLives(livesRef.current);

          if (livesRef.current === 0) {
            clearInterval(timer);
            clearInterval(brickSpawner);
            setGameOver(true);
          }

          return false;
        }

        return true;
      });

      animationId = requestAnimationFrame(draw);
    }

    draw();

    function move(e) {
      const rect = canvas.getBoundingClientRect();

      basketX = Math.max(
        0,
        Math.min(canvas.width - 120, e.clientX - rect.left - 60)
      );
    }

    canvas.addEventListener("mousemove", move);

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(brickSpawner);
      clearInterval(timer);
      canvas.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center">

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-6xl font-black text-red-500 mb-8"
      >
        BRICK VAULT
      </motion.h1>

      <div className="flex gap-20 text-3xl font-bold mb-8">
        <p>🏆 {score}</p>
        <p>❤️ {lives}</p>
        <p>⏳ {time}</p>
      </div>

      <canvas
        ref={canvasRef}
        width={900}
        height={500}
        className="rounded-3xl border border-red-500 bg-[#191919] shadow-[0_0_40px_rgba(255,0,0,.35)]"
      />

      <div className="flex gap-4 mt-8">
        <button
          onClick={closeGame}
          className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 transition-all"
        >
          ← Back to BRICKÉ
        </button>

        {(gameOver || gameWon) && (
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-4 rounded-full bg-green-600 hover:bg-green-500 transition-all"
          >
            Restart Game
          </button>
        )}
      </div>

    </div>
  );
}