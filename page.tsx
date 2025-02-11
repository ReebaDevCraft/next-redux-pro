import AddUser from "./components/AddUser";
import DisplayUser from "./components/DisplayUser";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Next.js!</h1>
      <AddUser/>
      <DisplayUser/>
    </main>
  );
}
