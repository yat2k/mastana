import About from "./About";
import Charity from "./Charity";
import "./components.css";
import Contact from "./Contact";
import Nav from "./Navbar";
import Sponsors from "./Sponsors";
import Committee from "./Committee";
import Gallery from "./Gallery";
function Home() {
  return (
    <> 
      <Nav />   
      <section className="header">
      
        <div className="text-box">
          <h1>Mastana</h1>
          <p className="glow">Sunday 3rd March, West Road Concert Hall</p>
        </div>
        <div className="lower-text-box">
          <p>Join us for our biggest show yet!</p>
        </div>
      </section>
      <About />
      <Charity />
      <Committee />
      <Gallery />
      <Sponsors />
      <Contact />
    
    </>
  );
}

export default Home;
