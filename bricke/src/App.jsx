import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Background from "./components/Background";
import Story from "./components/Story";
import Spotlight from "./components/Spotlight";
import BrickGame from "./components/BrickGame";

export default function App() {
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="relative overflow-x-hidden bg-black text-white">
      <Background />

      {/* Mouse Follow Light */}
      <Spotlight />

      <Navbar />

      <Hero />

      <Story openGame={() => setShowGame(true)} />

      {showGame && (
        <BrickGame closeGame={() => setShowGame(false)} />
      )}
    </div>
  );
}