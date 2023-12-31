import React from 'react';
import './Projects.css';
import cf1 from './Images/cf1.jpg';
import cf2 from './Images/cf2.jpg';
import cf3 from './Images/cf3.jpg';
import cf4 from './Images/cf4.jpg';
import extension from './Images/extension.jpg';
import home from './Images/home.png';
import home2 from './Images/home2.png';
import home3 from './Images/home3.png';
import faculty from './Images/faculty.png';
import forum1 from './Images/forum1.png';
import forum2 from './Images/forum2.png';
import forum3 from './Images/forum3.png';
import forum4 from './Images/forum4.png';
import contactus from './Images/contactus.png';
import profile from './Images/profile.png';
import github from './Images/github.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Carousel from 'react-bootstrap/Carousel';
import {useEffect,useRef} from 'react';


export default function Projects() {
  const project1para = useRef(null);
  const project2para = useRef(null);
  const project3para = useRef(null);
  const project1img = useRef(null);
  const project2img = useRef(null);
  const project3img = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 50% of the element is in the viewport
    };
    const intersectionCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if(entry.target === project1para.current) {
            project1para.current.classList.add('active');
          }
          else if(entry.target === project2para.current) {
            project2para.current.classList.add('active');
          }
          else if(entry.target === project3para.current) {
            project3para.current.classList.add('active');
          }
          else if(entry.target === project1img.current) {
            project1img.current.classList.add('active');
          }
          else if(entry.target === project2img.current) {
            project2img.current.classList.add('active');
          }
          else if(entry.target === project3img.current) {
            project3img.current.classList.add('active');
          }
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(intersectionCallback, options);
    observer.observe(project1para.current);
    observer.observe(project2para.current);
    observer.observe(project3para.current);
    observer.observe(project1img.current);
    observer.observe(project2img.current);
    observer.observe(project3img.current);
  }, []);
  return (
    <>
      <div className='projects'>
        <h1>Projects</h1>
      </div>
      <p style={{ color: 'white' }}><i>Unleash the cat for a sneak peek at my projects.</i></p>
      <a href="https://github.com/Nikhil5022" rel="noreferrer" target='_blank'><img src={github} alt="" className='github' /></a>
      <div className='projectslists'>
        <div className='projectlist'>
          <p ref={project1para}><b style={{ fontSize: "1rem", padding: "2px" }}>Aim</b>: To Develop an Interactive website empowering users to discover, explore, and rate
            movies. <br />
            <b style={{ fontSize: "1rem", padding: '2px' }}>TechStack</b>: Angular, Express JS, MongoDB, Tailwind CSS. <br />
            <b style={{ fontSize: "1rem", padding: "2px" }}>Description</b>: Developed a comprehensive IMDb clone project with user registration, search
            functionality, detailed movie/TV show pages, user reviews, and responsive design,
            showcasing adeptness in web development, teamwork, and delivering a user-friendly
            product.
          </p>
          <div className='cinefiles' ref={project1img}>
            <Carousel fade>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={cf1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={cf2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={cf3}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={cf4}
                  alt="Second slide"
                />
              </Carousel.Item>

            </Carousel>
          </div>
        </div>
        <hr style={{ color: "white", padding: '5px' }} />
        <div className='projectlist' id='projectextension'> 
          <div className='extension'>
            <img ref={project2img}
              className="d-block w-50"
              src={extension}
              alt="First slide"
            />

          </div>
          <p ref={project2para}><b style={{ fontSize: "1rem", padding: "2px" }} id='exten'>Aim</b>: To Develop a Chrome Extension that is used to bookmark your websites for an
            effortless daily experience. <br />
            <b style={{ fontSize: "1rem", padding: '2px' }}>TechStack</b>: Angular ,Express ,Tailwind CSS. <br />
            <b style={{ fontSize: "1rem", padding: "2px" }}>Description</b>: Created a user-friendly and efficient bookmarking Chrome extension that
            enables users to save and organize their favorite websites with ease, showcasing
            proficiency in web development and enhancing user experience.
            product.
          </p>

        </div>
        <hr style={{ color: "white", padding: '5px' }} />
        <div className='projectlist'>
          <p ref={project3para}><b style={{ fontSize: "1rem", padding: "2px" }}>Aim</b>: To Develop a Two Interface Website to handle the events and data of ET Department. <br />
            <b style={{ fontSize: "1rem", padding: '2px' }}>TechStack</b>: Angular, Express JS, MongoDB, Tailwind CSS. <br />
            <b style={{ fontSize: "1rem", padding: "2px" }}>Description</b>:
            This project is about creating a two-interface website for the Department of Emergent Technologies (ET). The first interface handles event management, making it easier to organize, track, and engage participants in emerging technology-related activities. The second interface is for data management, ensuring the secure organization and storage of documents relevant to emergent technologies. This solution enhances departmental efficiency, promotes collaboration, and prioritizes data security in the ever-evolving field of emergent technologies.</p>
          <div className='etwebsite' ref={project3img}>
          <Carousel fade>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={home}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={home2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={home3}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={faculty}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={forum1}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={forum2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={forum3}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={forum4}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={profile}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={contactus}
                    alt="Second slide"
                  />
                </Carousel.Item>

              </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
