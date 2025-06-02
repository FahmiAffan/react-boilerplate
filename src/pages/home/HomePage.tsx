import "./HomePage.css";
import MeshBackground from "../../components/MeshBackground";

export default function Home() {
  const arr = [
    {
      type: "text",
      content: "Hello, World!",
    },
    {
      type: "text",
      content: "Hello, World!",
    },
  ];
  return (
    <>
      <h1>haloo</h1>
      <div>
        <MeshBackground />
        <MeshBackground />
        {arr.map((item, index) => (
          <div>
            <p key={index}>{item.content}</p>
          </div>
        ))}
      </div>
      <p>Welcome to the Home Page!</p>
      <p>This is where you can find the latest updates and news.</p>
    </>
  );
}
