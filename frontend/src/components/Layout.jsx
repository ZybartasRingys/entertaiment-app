import Header from "./Header";

import { Outlet } from "react-router-dom";
import Search from "./Search";

import SmoothScroll from "./styles/SmoothScroll";

export default function Layout({ children }) {
  return (
    <>
      <SmoothScroll>
        <header>
          <Header />
        </header>
        <nav>
          <Search />
        </nav>
        <main>
          <Outlet />
        </main>
      </SmoothScroll>
    </>
  );
}
