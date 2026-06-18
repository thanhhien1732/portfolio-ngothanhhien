import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react";
import AppHeader from "./components/layout/app.header"
import Nav from "./components/layout/Nav"

function Layout() {
  const location = useLocation();

  // Tự động cuộn lên đầu trang mỗi khi đường dẫn (pathname) thay đổi
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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