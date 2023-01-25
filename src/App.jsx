import "./App.css";
import { GameBoard } from "./components";
import { MobileControls } from "./components/MobileControls/MobileControls";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="w-full h-screen flex bg-white items-center flex-col">
      <Navbar />
      <GameBoard />
      <MobileControls />
    </div>
  );
}

export default App;
