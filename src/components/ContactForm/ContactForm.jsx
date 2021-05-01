import React from "react";
import classes from "./ContactForm.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { HashLink as Link } from "react-router-hash-link";

function ContactForm() {
  return (
    <form action="#">
      <label htmlFor="name">
        <p>Name</p>
      </label>
      <input placeholder="You name" type="text" id="name" />
      <label htmlFor="email">
        <p>Email adress</p>
      </label>
      <input placeholder="You email address" type="email" id="email" />
      <Link smooth to="/work-in-progress" type="submit" className={classes.Btn}>
        GET STARTED <BsArrowRight className={classes.Icon} />
      </Link>
    </form>
  );
}

export default ContactForm;
