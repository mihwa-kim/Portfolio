import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsFilePdf, BsFileText } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { FaVideo, FaTable, FaFilePowerpoint } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {props.videoLink && (
          <Button
            variant="primary"
            href={props.videoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaVideo /> &nbsp;
            {"Video"}
          </Button>
        )}

        {props.tableauLink && (
          <Button
            variant="primary"
            href={props.tableauLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaTable /> &nbsp;
            {"Tableau"}
          </Button>
        )}

        {props.pdfLink && (
          <Button
            variant="primary"
            href={props.pdfLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsFilePdf /> &nbsp;
            {"PDF"}
          </Button>
        )}

        {props.presoLink && (
          <Button
            variant="primary"
            href={props.presoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaFilePowerpoint /> &nbsp;
            {"Presentation"}
          </Button>
        )}

        {props.reportLink && (
          <Button
            variant="primary"
            href={props.reportLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsFileText /> &nbsp;
            {"Report"}
          </Button>
        )}

        {props.webpageLink && (
          <Button
            variant="primary"
            href={props.webpageLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BiLinkExternal /> &nbsp;
            {"Webpage"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
