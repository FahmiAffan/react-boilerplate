import Image from "next/image";
import { trx } from "./User/UserHandler";
import Button from "./components/Button";
import Table from "./components/Table";

const data = [{ name: 'fahmi', age: 18 }, { name: 'fahmi', age: 18 }, { name: 'fahmi', age: 18 }]

export default function Home() {

  const hello = () => 'hello'

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Hello React {hello()}</h1>
        <h1>{trx({ name: 'fahmi' })}</h1>
        <ul>{
          data.map((val, i) =>
          (
            <li key={i}> {val.age} {val.name} </li>
          ))
        }</ul>
        <Button title="save"></Button>
        <Table data={data} header={['nama', 'umur']}></Table>        
      </main>
    </div>
  );
}