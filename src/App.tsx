import { useState } from "react";
import "./App.css";
import { Icon } from "@iconify/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Icon icon={"mdi-light:home"} />
      <h1 className="text-3xl font-bold underline text-red-500">Hello world!</h1>
    </>
  );
}

export default App;
