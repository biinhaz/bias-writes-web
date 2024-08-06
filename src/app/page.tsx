import Cover from "./pages/cover";
import Navbar from "./pages/nav-bar";
import RecentPosts from "./pages/recent-posts";

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
