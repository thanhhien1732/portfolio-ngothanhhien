import { Outlet } from "react-router-dom"
import AppHeader from "./components/layout/app.header"
import Nav from "./components/layout/Nav"

function Layout() {

  return (
    <div>
      <AppHeader />
      <Nav />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout