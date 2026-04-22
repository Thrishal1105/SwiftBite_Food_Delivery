import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavHeader = ({ menu, setMenu }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hovered, setHovered] = useState(null);

  return (
    <ul
      className="relative flex w-fit rounded-full border-2 border-primary/20 bg-white p-1 shadow-sm"
      onMouseLeave={() => {
        setPosition((pv) => ({ ...pv, opacity: 0 }));
        setHovered(null);
      }}
    >
      <Tab setPosition={setPosition} name="home" active={hovered === "home"} onHover={setHovered} onClick={() => setMenu("home")} to="/">
        home
      </Tab>
      <Tab setPosition={setPosition} name="menu" active={hovered === "menu"} onHover={setHovered} onClick={() => setMenu("menu")} href="#explore-menu">
        menu
      </Tab>
      <Tab setPosition={setPosition} name="mobile-app" active={hovered === "mobile-app"} onHover={setHovered} onClick={() => setMenu("mobile-app")} href="#app-download">
        mobile-app
      </Tab>
      <Tab setPosition={setPosition} name="contact-us" active={hovered === "contact-us"} onHover={setHovered} onClick={() => setMenu("contact-us")} href="#footer">
        contact us
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, name, active, onClick, onHover, to, href }) => {
  const ref = useRef(null);
  
  const content = (
    <span className={`relative z-10 block cursor-pointer px-3 py-1.5 text-sm uppercase transition-colors duration-300 md:px-5 md:py-2 md:text-base font-semibold ${active ? 'text-white' : 'text-black'}`}>
      {children}
    </span>
  );

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
        if (onHover) onHover(name);
      }}
      onClick={onClick}
      className="relative"
    >
      {to ? (
        <Link to={to}>{content}</Link>
      ) : (
        <a href={href}>{content}</a>
      )}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-8 rounded-full bg-primary md:h-10"
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    />
  );
};

export default NavHeader;
