import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="min-h-screen w-full duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg mx-2"
          onClick={() => setColor("red")}
        >
          Red
        </button>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg mx-2"
          onClick={() => setColor("green")}
        >
          Green
        </button>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mx-2"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>

        <button
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg mx-2"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>

        <button
          className="bg-black text-white px-4 py-2 rounded-lg mx-2"
          onClick={() => setColor("black")}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;