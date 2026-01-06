import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    let data = await fetch("http://localhost:3000/");
    data = await data.json();
    console.log(data);
  }

  return <h1>Api call</h1>;
}

export default App;
