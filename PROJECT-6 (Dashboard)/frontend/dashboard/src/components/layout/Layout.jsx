import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <Outlet />   {/* Pages render here */}
      </div>
    </div>
  );
}
