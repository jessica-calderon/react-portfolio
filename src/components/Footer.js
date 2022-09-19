import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

// TODO: Fix links and top margin spacing 
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mt-4">
            <a href="https://www.linkedin.com/in/jessica-calderon-00/" target="_blank" rel="noreferrer" alt="Jessica Calderon LinkedIn Profile">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://www.github.com/jessica-calderon" target="_blank" rel="noreferrer" alt="Jessica Calderon GitHub Profile">
                  <img src={navIcon2} alt="GitHub Octocat" />
                </a>
            </div>
            <p>Made with Love by Jessica Calderon | 2022 | All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
