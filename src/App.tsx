import React, { useState } from "react";
import "./App.css";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router";
import { useParams } from "react-router";

import { ToastContainer, toast } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  const params = useParams();

  console.log("Params:", params.id);

  const notify = () => toast.error("Wow so easy!");

  return (
    <>
      <Icon icon={"mdi-light:home"} />
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <button onClick={notify}>click me</button>
    </>
  );
}

export default App;
