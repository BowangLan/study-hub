import React, { useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import UserIcon from "./icons/UserIcon";
import { AnimatePresence } from "framer-motion";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  const [sideOpen, setSideOpen] = useState(false);

  const openSideBar = () => {
    setSideOpen(() => true);
  };

  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        {sideOpen && <SideBar setSideOpen={setSideOpen} />}
      </AnimatePresence>
      <header className="h-20 w-full bg-purple-200 px-8">
        <div className="h-full w-full relative flex items-center justify-center">
          <div>Page Title</div>
          <div className="absolute left-0 h-full flex items-center">
            <div onClick={openSideBar}>
              <MenuIcon size={30} />
            </div>
          </div>
          <div className="absolute right-0 h-full flex items-center">
            <div onClick={openSideBar}>
              <UserIcon size={30} />
            </div>
          </div>
        </div>
      </header>
      <main className="">{children}</main>
    </div>
  );
}
