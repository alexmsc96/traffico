import React from "react";
import classes from "./Navbar.module.scss";
import Logo from "../Logo/Logo";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <div className={classes.InnerContainer}>
      <nav className={classes.Navbar}>
        <Logo />
        <ul>
          <li>
            <Link smooth to="/#about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/#how-to"> HOW TO</Link>
          </li>
          <li>
            <Link to="/#faqs">FAQS</Link>
          </li>
          <li>
            <Link to="/#contact-us" className={classes.Btn}>
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
