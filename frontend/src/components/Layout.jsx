import Header from './Header'

import { Outlet } from 'react-router-dom'
import Search from './Search'

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <nav>
        <Search />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}
