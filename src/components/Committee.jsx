import './components.css'
import { Container, Row, Col } from "react-bootstrap";
import MembersCards from "./CommitteeMembersCard";
import pres1 from "../assets/committe_members/anushka.jpg";
import pres2 from "../assets/committe_members/harsh.jpg";
import pres3 from "../assets/committe_members/sunima.jpg";
import fandm1 from "../assets/committe_members/Adhvika_F_M.jpg";
import fandm2 from "../assets/committe_members/Minerva_F_M.jpeg";
import fandm3 from "../assets/committe_members/Shangavi_F_M.png";
import fandm4 from "../assets/committe_members/Vakeeta_F_M.jpeg";
import fandm5 from "../assets/committe_members/Vedaangh_F_M.jpg";
import acts1 from "../assets/committe_members/Janavi_Acts.jpeg";
import acts2 from "../assets/committe_members/Palak_Acts.jpg";
import acts3 from "../assets/committe_members/Shivansh_Acts.jpg"
import acts4 from "../assets/committe_members/Shriram_Acts.png";
import prod1 from "../assets/committe_members/Ishika_Production.jpeg";
import prod2 from "../assets/committe_members/Jashwanth_Production.jpg";
import prod3 from "../assets/committe_members/Parth_Production.png";
import prod4 from "../assets/committe_members/Rayya_Production.jpeg";
import prod5 from "../assets/committe_members/Siddhant_Production.jpeg";

export default function Committee(){
  return (
    <div className='pinkbg'>
      <section className='committe'>
      <Container fluid className="project-section" id="committee">
      {/* <Particle /> */}
      <Container>
        <h1>
          Our Committee
        </h1>
        <h2 >
        Presidents 
        </h2>            
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <MembersCards
              title="Anushka Irodi"
              imgPath={pres1}
              description=""
            />
          </Col>
          <Col md={4} className="project-card">
          <MembersCards
              title="Harsh Sinha"
              imgPath={pres2}
              description=""
            />
          </Col>
          <Col md={4} className="project-card">
          <MembersCards
              title="Sunima Basnet"
              imgPath={pres3}
              description=""
            />
          </Col>
        </Row>
        <h2 >
        Finance & Marketing
        </h2> 
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <MembersCards
              title="Adhvika Muthukrishnan"
              imgPath={fandm1}
              description=""
            />
          </Col>
          <Col md={4} className="project-card">
          <MembersCards
              title="Minerva Maheshwari"
              imgPath={fandm2}
              description=""
            />
          </Col>
          <Col md={4} className="project-card">
          <MembersCards
              title="Shangavi Ganeshan"
              imgPath={fandm3}
              description=""
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <MembersCards
              title="Vakeeta Rubakumar"
              imgPath={fandm4}
              description=""
            />
          </Col>
          <Col md={4} className="project-card">
          <MembersCards
              title="Vedaangh Rungta"
              imgPath={fandm5}
              description=""
            />
          </Col>
        </Row>
        <h2 >
          Acts
        </h2> 
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <MembersCards
              title="Janavi"
              imgPath={acts1}
              description=""
            />
          </Col>
          <Col md={4} className="project-card">
          <MembersCards
              title="Palak Patel"
              imgPath={acts2}
              description=""
            />
          </Col>
          <Col md={4} className="project-card">
          <MembersCards
              title="Shivansh Pandey"
              imgPath={acts3}
              description=""
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <MembersCards
              title="Shriram Mahesh"
              imgPath={acts4}
              description=""
            />
          </Col>
        </Row>
        <h2 >
          Production
        </h2> 
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <MembersCards
              title="Ishika Samanta"
              imgPath={prod1}
              description=""
            />
          </Col>
          <Col md={4} className="project-card">
          <MembersCards
              title="Jashwanth"
              imgPath={prod2}
              description=""
            />
          </Col>
          <Col md={4} className="project-card">
          <MembersCards
              title="Parth Narlawar"
              imgPath={prod3}
              description=""
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <MembersCards
              title="Siddhant"
              imgPath={prod5}
              description=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
    </div>
  );
}

