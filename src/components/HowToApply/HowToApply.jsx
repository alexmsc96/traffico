import React, { useEffect } from "react";
import classes from "./HowToApply.module.scss";
import Illustrations from "../../assets/images/illustrations.png";
import Aos from "aos";
import "aos/dist/aos.css";

function HowToApply() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="how-to" className={classes.InnerContainer}>
      <section className={classes.Section}>
        <div className={classes.SectionImageContainer}>
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="500"
            data-aos-once="true"
            className={classes.SectionImage}
            src={Illustrations}
            alt="Illustration"
          />
        </div>
        <div className={classes.SectionContent}>
          <h2>HOW TO APPLY</h2>
          <p className={classes.Text}>
            When applying for a traffic permit, there are certain requirements
            that you must meet that are included in the examination:
            requirements for professional knowledge, solid establishment, good
            reputation and financial resources. Important to remember is to
            confirm your application for a traffic permit by the company's
            company signer or CEO.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HowToApply;
