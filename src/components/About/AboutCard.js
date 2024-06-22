import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mihwa Kim </span>
            located in <span className="purple"> Sydney, Australia.</span>
            <br />
            I am actively studying a Master of Data Analytics.
            <br />
            I am enthusiastic and dedicated to my major. Achieved a 6.63 out of 7 GPA and actively participated in extracurricular activities and internships.
            <br />
            <br />
            Apart from working with data, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to K-pop
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace challenges and learn to adapt as fluidly as water!"{" "}
          </p>
          <footer className="blockquote-footer">Mihwa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
