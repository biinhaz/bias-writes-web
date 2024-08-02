import Cover from "./components/cover";
import Navbar from "./components/nav-bar";
import RecentPosts from "./components/recent-posts";
import LoginPage from "./pages/login";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <Navbar />
        <Cover />
        <RecentPosts />
      </div>
    </main>
  )
}
