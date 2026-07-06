import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  // Generate Password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]+=-_?/<>";

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Generate password automatically
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // Copy password
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);

    window.navigator.clipboard.writeText(password);
    alert("Password Copied!");
  }, [password]);

  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg px-6 py-8">
        <h1 className="text-3xl text-center text-orange-500 font-bold mb-6">
          Password Generator
        </h1>

        {/* Password Input */}
        <div className="flex rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 text-lg"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-6 text-orange-400">

          {/* Length */}
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          {/* Numbers */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>

          {/* Special Characters */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;