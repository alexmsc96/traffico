import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import classes from "./Sidebar.module.scss";
import { HashLink as Link } from "react-router-hash-link";

function Sidebar() {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <nav className={classes.Sidebar}>
      <Logo />
      <ul
        style={{
          transform: toggleNav ? "translateX(0)" : "translateX(100vw)",
          opacity: toggleNav ? "1" : "0",
        }}
      >
        <li onClick={() => setToggleNav(false)}>
          <Link smooth to="/#about">
            ABOUT
          </Link>
        </li>
        <li onClick={() => setToggleNav(false)}>
          <Link to="/#how-to"> HOW TO</Link>
        </li>
        <li onClick={() => setToggleNav(false)}>
          <Link to="/#faqs">FAQS</Link>
        </li>
        <li onClick={() => setToggleNav(false)}>
          <Link to="/#contact-us" className={classes.Btn}>
            CONTACT US
          </Link>
        </li>
        <BsX
          onClick={() => setToggleNav(!toggleNav)}
          className={classes.CloseBurger}
        />
      </ul>
      <BsList
        onClick={() => setToggleNav(!toggleNav)}
        className={classes.Burger}
      />
    </nav>
  );
}

export default Sidebar;
