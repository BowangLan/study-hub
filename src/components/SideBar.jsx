import React from 'react'
import { AiOutlineLeft } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";


const sideVariants = {
  open: {
    opacity: 1,
    x: 0,
  },
  close: {
    opacity: 0,
    x: "-100%",
    transition: {
      ease: "easeIn",
    },
  },
};

const navItems = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/find",
    name: "Find",
  },
];


const SideBar = ({ setSideOpen }) => {
  const imgUrl =
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80";
  const router = useRouter();
  const customNavigate = (href) => {
    setSideOpen(() => false);
    router.push(href);
  };
  return (
    <motion.aside
      className="absolute left-0 top-0 w-3/4 bottom-0 bg-slate-300 px-8 z-10 overflow-hidden"
      variants={sideVariants}
      initial="close"
      animate="open"
      exit="close"
    >
      <div className="w-full py-6">
        <AiOutlineLeft size={30} onClick={() => setSideOpen(() => false)} />
      </div>
      <div className="w-full py-6 flex flex-col items-center gap-4">
        <div className="inline-block rounded-full overflow-hidden">
          <Image
            src={imgUrl}
            alt="Image"
            width="160"
            height="160"
            onClick={() => customNavigate("/profile")}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-xl">Zizheng Huang</span>
          <span className="font-semibold text-sm text-gray-100">
            zlhung@uw.edu
          </span>
        </div>
      </div>
      <ul>
        {navItems.map((item, index) => {
          return (
            <li key={index} onClick={() => customNavigate(item.href)} className="px-6 py-4">
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
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
  );
};


export default SideBar;