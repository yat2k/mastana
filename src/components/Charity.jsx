import "./components.css";
import charity1 from "../assets/charity_akshaya.png";
import charity2 from "../assets/charity_bowelCancerUK.png";
import Button from "react-bootstrap/Button";

export default function Charity() {
  return (
    <div>
      <section className="charity" id="charity">
        <h1>Our Partner Charities</h1>  
        <div className="row">
          <div className="charity-col">
            <img src={charity1} />
            <div className="layer">
              <a href="https://akshayachaitanya.org/" target="_blank">
                <h3>Akshaya Chaitanya</h3>
              </a>
            </div>
            <p>
              Akshaya Chaitanya is an initiative in Mumbai, India, which aims to
              eradicate hunger in a sustainable and scalable way. They serve hot
              nutritious meals daily for the vulnerable population across
              government hospitals, government schools and children living in
              the slums.
            </p>
          </div>
          <div className="charity-col">
            <img src={charity2} />
            <div className="layer">
              <a href="https://www.bowelcanceruk.org.uk/" target="_blank">
                <h3>Bowel Cancer UK</h3>
              </a>
            </div>
            <p style={{marginTop:"1.35em"}}>
              Bowel Cancer UK holds a vision of a future where nobody dies of
              the disease. They support patients and their families, campaign
              for early diagnosis and access to best treatment, educate the
              public and professionals and support and fund research into bowel
              cancer.
            </p>
          </div>
        </div>
        <button
          className="donate-button"
        >
          <a
            href="https://gofund.me/a41861b6"
            target="_blank"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <b>Donate Now</b>
          </a>
        </button>
        <p style={{marginTop:"10px"}}>Every contribution, small or big, makes a difference.</p>
      </section>
    </div>
  );
}
