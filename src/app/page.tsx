"use client";

import Image from "next/image";
import { trx } from "./User/UserHandler";
import Button from "./components/Button";
import Table from "./components/Table";
import { useState } from "react";
import "./style/index.css";

const data = [
  { name: "fahmi", age: 18 },
  { name: "fahmi", age: 18 },
  { name: "fahmi", age: 18 },
];

export default function Home() {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("");
  let [age, setAge] = useState(0);
  let [form, setForm] = useState({
    name: "",
    age: 0,
    phoneNumber: "",
    lahir: "",
  });

  const increment = () => {
    setCount((count += 1));
  };

  const decrement = () => {
    setCount((count -= 1));
  };

  const hello = () => "hello";

  const handleSubmit = () => {
    console.log(form);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        age: form.age,
        phoneNumber: form.phoneNumber,
        lahir: form.lahir,
      }),
    });
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Hello React {hello()}</h1>
        <h1>{trx({ name: "fahmi" })}</h1>
        <button onClick={decrement}>-</button>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <ul>
          {data.map((val, i) => (
            <li key={i}>
              {" "}
              {val.age} {val.name}{" "}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4">
          <h1>Profil</h1>
          <p>Tahun lahir saya {form.lahir}</p>
          <p>Umur saya {form.age}</p>
          <p>Nomor Handphone saya {form.phoneNumber}</p>
          <p>Nama saya {form.name}</p>
        </div>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={(val) => setForm({ ...form, name: val.target.value })}
        />

        <label htmlFor="lahir">Tahun Lahir</label>
        <input
          type="text"
          value={form.lahir}
          name="lahir"
          onChange={(val) => {
            setForm({ ...form, lahir: val.target.value });
          }}
          onBlur={(val) =>
            setForm({ ...form, age: 2025 - parseInt(form.lahir) })
          }
        />
        <button onClick={handleSubmit}>Submit</button>
      </main>
    </div>
  );
}
