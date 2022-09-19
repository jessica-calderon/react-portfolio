import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// TODO: site archive object and section stuff

export const Projects = () => {

  const projects = [
    {
      title: "BANTR",
      description: "Full Stack CMS blog and live chat study blog.",
      imgUrl: projImg1,
    },
    {
      title: "ReadME Generator",
      description: "Backend CLI application to generate Markdowns.",
      imgUrl: projImg2,
    },
    {
      title: "Talking Tech",
      description: "Full-Stack Technology blog.",
      imgUrl: projImg3,
    },
    {
      title: "Pollen Tracker",
      description: "Front-end, location-based allergen and pollen tracker.",
      imgUrl: projImg4,
    },
    {
      title: "Team Profile Generator",
      description: "Back-end CLI application to generate front-end team profiles.",
      imgUrl: projImg5,
    },
    {
      title: "Weather Dashboard",
      description: "Front-end web application to track weekly forecasts.",
      imgUrl: projImg6,
    },
    {
    title: "Code Quiz",
    description: "Front-end, multiple choice JavaScript quiz.",
    imgUrl: projImg7,
    },
    {
    title: "Password Generator",
    description: "Front-end password generator based on user-selected conditions.",
    imgUrl: projImg8,
    },
        {
        title: "Work Day Scheduler",
        description: "Front-end daily task scheduler.",
        imgUrl: projImg9,
        }
  ];
  
// TODO: add repo and demo links 
// TODO: Modal popups
// TODO: Site Archive Project Cards and Section
// TODO: add (or delete?) CodePen Stuff...
// TODO: kinda wanna fix the screenshots too.... not super into them
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My latest and greatest works...</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Site Archive</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Code Pen</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Coming Soon...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming Soon...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}