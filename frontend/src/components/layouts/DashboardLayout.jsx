import React from "react";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} activeMenu={activeMenu} />
      {user && (
        <div className="flex pt-16">
          <div className="hidden lg:block">
            <SideMenu activeMenu={activeMenu} />
          </div>
          <div className="flex-1 p-4 lg:p-8 overflow-auto">
            <div className="max-w-7xl mx-auto">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;