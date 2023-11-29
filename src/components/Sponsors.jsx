import "./components.css";
import sponsor1 from '../assets/Sponsors/karuna Bilimoria.jpg'

export default function Sponsors() {
  return (
    <div className="pinkbg">
      <section className="sponsors" id="sponsor">
      <h1> Our Sponsors</h1>
      <img src={sponsor1} className="sponsor-image" />
      <p>We would love to partner with you! Download our <a href="https://drive.google.com/file/d/1edwO7WXEKkhfThSHpbpgd3A1F-GwADOd/view?usp=sharing" target="_blank">brochure</a> to learn more about our sponsorship packages.</p>
      </section>
      
    </div>
  );
}