import React, { useEffect } from "react";
import classes from "./Top.module.scss";
import { BsArrowRight } from "react-icons/bs";
import Truck from "../../assets/images/mobel.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Top() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="/" className={classes.Scene}>
      <div className={classes.InnerContainer}>
        <section className={classes.Section}>
          <h1>
            Your awesome <br /> traffic permit <br /> consultant.
          </h1>
          <Link to="work-in-progress" className={classes.Btn}>
            GET STARTED <BsArrowRight className={classes.Icon} />
          </Link>
        </section>
      </div>
      <img
        className={classes.Truck}
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
        data-aos-once="true"
        src={Truck}
        alt="Truck"
      />
    </div>
  );
}

export default Top;
