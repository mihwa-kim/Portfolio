import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import lagardere from "../../Assets/Projects/lagardere.png";
import FocusAI from "../../Assets/Projects/FocusAI.png";
import chargeaction from "../../Assets/Projects/chargeaction.png";
import AusTrade from "../../Assets/Projects/AusTrade.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FocusAI}
              isBlog={false}
              title="FocusAI"
              description="Body Detection Application. By identifying and isolating individuals in the image, the model ensures that the viewer's attention is drawn primarily to the subjects. The blurring of the background reduces distractions, providing a cleaner, more professional appearance. This can be particularly useful in applications such as video conferencing, photography, and social media, where the focus is often on the individuals present and not the environment around them. Additionally, by blurring the background, the model can help protect sensitive or private information that might inadvertently be captured in the image."
              ghLink="https://github.com/mihwa-kim/person_detection"
              demoLink="https://humandetection.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AusTrade}
              isBlog={false}
              title="Australia's Trade Trend"
              description="Tableau Storyboard for Changes and Trends in Australia's Trade & Imports and Exports of Food and Live Animals From 1988 to 2023."
              tableauLink="https://public.tableau.com/views/StoryboardofAustraliaTradeTrendbetween1988and2023/Story?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lagardere}
              isBlog={false}
              title="Human Resource Data Trend"
              description="Increased data accessibility and comprehension through the utilisation of SQL for data manipulation and PowerBI for visualisation, resulting in advanced workflow efficiency"
              pdfLink="https://drive.google.com/file/d/1Dx_SANl4aLneD9MHKqF2yS9CiAxUKMlU/view?usp=sharing"
              videoLink="https://www.youtube.com/watch?v=y1TuwmawYYI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="LLM-Driven Diagnostic System Naval Ship Engine Alarms"
              description="Automated extraction of relevant information from technical documentation. Real-time diagnosis and action recommendations based on the extracted information."
              ghLink="https://github.com/ShauryaS31/AI-HACKATHON"
              presoLink="https://drive.google.com/file/d/15LdSAdBDJhV0U1lAUAkzuX240oB9FeRj/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chargeaction}
              isBlog={false}
              title="Charge ACTion"
              description="The growing use of electric vehicles in the Australian Capital Territory (ACT) requires a robust public charging infrastructure. The ACT Government aims to install 180 charging stations by 2025. We have strategic recommendations in two parts: Part 1 focuses on efficient distribution of stations and charger types, while Part 2 addresses behavioral considerations and strategies to encourage the use of public charging stations. We've also created a video and website to present these solutions for the challenge of Charging Electric Vehicles in the ACT."
              reportLink="https://docs.google.com/document/d/14vP6KyQdwnBtqzOupY_GV9RQio5YJ8xD/edit"
              webpageLink="https://sites.google.com/view/govhack-digitaldynamos/home?authuser=0"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
