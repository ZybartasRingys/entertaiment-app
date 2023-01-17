import Header from "./Header";
import Search from "./Search";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        {children}
        <Search />
      </main>
    </>
  );
}
