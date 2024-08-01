import Navbar from "./components/nav-bar";
import LoginPage from "./pages/login";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <Navbar />
        <div className="mt-28 m-4 p-10">
        <div className="w-full bg-black opacity-30" style={{ height: '1px' }}></div>
        <p className="font-bold" style={{ fontSize: '170px' }}>BIA'S WRITES</p>
        <div className="w-full bg-black opacity-30" style={{ height: '1px' }}></div>
        </div>
      </div>
    </main>
  )
}
