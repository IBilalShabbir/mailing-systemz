import { Footer, Header } from "components";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import HeaderDashboard from "../components/HeaderDashboard";
import Loading from "./loading";
import Sidebar from "../components/Sidebar";
import { SuspenseAfterInitialRender } from "../router";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [search, setSearch] = useState(false);
  const location = useLocation();

  function toggleSidebar() {
    if (window.innerWidth <= 850) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }

  useEffect(() => {
    toggleSidebar();
    window.addEventListener(  "resize", toggleSidebar);
  }, []);

  const [show, setShow] = useState(true);
  useEffect(() => {
    if (location.pathname.includes("/dashboard")) {
      setShow(false);
    } else if (location.pathname.includes("/signin")) {
      setShow(false);
    } else if (location.pathname.includes("/signinrecovery")) {
      setShow(false);
    } else if (location.pathname.includes("/signupverify")) {
      setShow(false);
    } else if (location.pathname.includes("/signup")) {
      setShow(false);
    } else if (location.pathname.includes("/mailhome")) {
      setShow(false);
    } else if (location.pathname.includes("/secretrecovery")) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [location]);

  return (
    <>
      {show ? <Header /> : null}
      {location.pathname.includes("/dashboard") ? (
        <div className="container">
          {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
          <div className="container__main">
            <HeaderDashboard setSidebarOpen={setSidebarOpen} />
            <div className="container__main__content">
              <SuspenseAfterInitialRender fallback={<Loading />}>
                <Outlet />
              </SuspenseAfterInitialRender>
            </div>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
      {show ? <Footer /> : null}
    </>
  );
}
