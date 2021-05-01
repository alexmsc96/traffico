import React, { useEffect } from "react";
import classes from "./Footer.module.scss";
import Trekmobil from "../../assets/images/trekmobil.png";
import Aos from "aos";
import "aos/dist/aos.css";
import ContactForm from "../ContactForm/ContactForm";
import Logo from "../Logo/Logo";
import Facebook from "../../assets/images/f.png";
import Instagram from "../../assets/images/i.png";
import Twitter from "../../assets/images/t.png";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <footer>
      <div className={classes.ImgContainer}>
        <img
          className={classes.Img}
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-once="true"
          src={Trekmobil}
          alt="Illustration"
        />
      </div>
      <div className={classes.FooterContainer}>
        <div className={classes.InnerContainer}>
          <div id="contact-us" className={classes.FormContainer}>
            <p className={classes.FooterText}>
              We provide traffic management consultants so you get started
              quickly, contact us for a quote today!
            </p>
            <ContactForm />
          </div>
          <div className={classes.FooterNav}>
            <Logo />
            <ul className={classes.FooterUl}>
              <li>
                <Link className={classes.FooterLink} smooth to="/#about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link className={classes.FooterLink} to="/#how-to">
                  HOW TO
                </Link>
              </li>
              <li>
                <Link className={classes.FooterLink} to="/#faqs">
                  FAQS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.Copyright}>
        <div className={classes.InnerContainer}>
          <p>Copyright © 2019</p>
          <div className={classes.Social}>
            <Link smooth to="/work-in-progress">
              <img src={Facebook} alt="Facebook" />
            </Link>
            <Link smooth to="/work-in-progress">
              <img src={Instagram} alt="Instagram" />
            </Link>
            <Link smooth to="/work-in-progress">
              <img src={Twitter} alt="Twitter" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
