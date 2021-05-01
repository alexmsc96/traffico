import React from "react";
import Traffico from "../../assets/images/logo.png";
import { HashLink as Link } from "react-router-hash-link";

function Logo() {
  return (
    <Link to="/#">
      <img src={Traffico} alt="Trafico." />
    </Link>
  );
}

export default Logo;
