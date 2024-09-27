import { useState } from "react";
import TestAPI from "../components/TestAPI.jsx";
import DarajaAPI from "../components/DarajaAPI.jsx";
import "./backend.css";

function TestPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="TestPage">
      <h1>Test Functionality Page</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
      <TestAPI />
      <DarajaAPI />
    </div>
  );
}

export default TestPage;
