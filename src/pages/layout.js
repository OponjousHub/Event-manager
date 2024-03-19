import { Outlet } from "react-router-dom";
import MainNavigation from "../components/mainNavigation";

function Layout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default Layout;
