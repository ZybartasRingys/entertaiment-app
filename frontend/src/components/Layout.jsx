import Header from "./Header";
import Search from "./Search";
import Trending from "./Trending/Trending";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        {children}
        <Search />
        <Trending />
      </main>
    </>
  );
}
