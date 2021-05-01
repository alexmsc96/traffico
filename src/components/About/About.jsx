import React, { useEffect } from "react";
import classes from "./About.module.scss";
import Illustration from "../../assets/images/Illustration.png";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className={classes.InnerContainer}>
      <section id="about" className={classes.Section}>
        <div className={classes.SectionContent}>
          <h2>ABOUT US</h2>
          <p className={classes.Text}>
            The occupational traffic permit is one of the most important things
            in the company when carrying out freight transport. In fact, it is a
            prerequisite for doing business traffic at all.
          </p>
          <div>
            <p className={classes.TextHighlight}>
              How do you do when you need to obtain a commercial traffic permit
              for freight transport to your business?
            </p>
          </div>
        </div>
        <div className={classes.SectionImageContainer}>
          <img
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-once="true"
            className={classes.SectionImage}
            src={Illustration}
            alt="Illustration"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
