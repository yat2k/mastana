import React from "react";
import Card from "react-bootstrap/Card";
import './components.css'
import Button from "react-bootstrap/Button";
import {BsLinkedin} from "react-icons/bs"
import {BiLogoGmail} from "react-icons/bi"
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

function MembersCards(props) {
  return (
    <Card className="pinkbg committee-card" style={{border:"none",background:"none"}}>
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{height:"70%", width:"70%",borderRadius:"50%",marginTop:"2%"}}
      />
      <Card.Body>
        <Card.Title style={{textAlign:"center"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default MembersCards;