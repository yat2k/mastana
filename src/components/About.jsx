import "./components.css";
import Logo from "../assets/mastanaNewLogo.jpg";
import Slide from "./Slide";
import AboutCarousel from "./AboutCarousel";

export default function About() {
  return (
    <div className="pinkbg">
      <section className="about" id="about">
        <h1>About Us</h1>
        <div className="row">
          <div className="about-col about-col-text">
            <p>
            Mastana is an annual South Asian variety showcase run by the students of Cambridge University. We put on display an array of different South Asian talent including dance, music, comedy, theatre, food and more, alongside raising money for charity. In the run-up to our showcase, we hold a variety of fundraising events such as mehendi evenings, Bollywood movie nights, South Asian snack sales and cultural games nights. All proceeds from our events and our showcase are donated to our partner charities.
            </p>
            <p>
            Mastana is the largest Asian cultural event in East Anglia and has attracted audiences of ~1000 for the last 27 years. We can’t wait to welcome you to our best show yet! 
            </p>
          </div>

          <div className="about-col about-col-img">
              <AboutCarousel />  
          </div>
        </div>
      </section>
      </div>
  );
}

{
  /* <div style={{width: "50%", float:"left"}}>
        <h3>Something0</h3>
            <p>
              Mastana is a student-led annual cultural charity showcase of South
              Asian talent at the University of Cambridge including dance,
              music, comedy, theatre, food and more! We are the largest Asian
              cultural event in East Anglia, attracting audiences of ~1000 for
              the last 27 years.We run a variety of fundraising events
              throughout the year: sports days, arts evenings, movie nights,
              selling snacks... All proceeds from events and the showcase are
              donated to our partner charities.
            </p>
</div>

<div style={{width: "50%",   float:"right"}}>
   <Slide/>
</div> */
}
