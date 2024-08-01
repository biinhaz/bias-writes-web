import Cover from "./components/cover";
import Navbar from "./components/nav-bar";
import LoginPage from "./pages/login";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <Navbar />
        <Cover />
      </div>
    </main>
  )
}
