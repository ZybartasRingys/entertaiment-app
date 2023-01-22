import Header from "./Header";

import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>

      <Outlet />
    </>
  );
}
