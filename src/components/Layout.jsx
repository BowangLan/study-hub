import React, { useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import UserIcon from "./icons/UserIcon";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLeft } from "react-icons/ai";

export default function Layout({ children }) {
  const [sideOpen, setSideOpen] = useState(false);

  const sideVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    close: {
      opacity: 0,
      x: '-100%',
      transition: {
        ease: 'easeIn'
      }
    },
  };

  const openSideBar = () => {
    setSideOpen(() => true);
  };

  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        {sideOpen && (
          <motion.aside
            className="absolute left-0 top-0 w-3/4 bottom-0 bg-slate-300 px-8 py-6 z-10 overflow-hidden"
            variants={sideVariants}
            initial="close"
            animate="open"
            exit="close"
          >
              <AiOutlineLeft size={30} onClick={() => setSideOpen(() => false)}/> 
              {/* {links.map(({ name, to, id }) => (
          <motion.a
            key={id}
            href={to}
            whileHover={{ scale: 1.1 }}
            variants={variants}
          >
            {name}
          </motion.a>
        ))} */}
          </motion.aside>
        )}
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
