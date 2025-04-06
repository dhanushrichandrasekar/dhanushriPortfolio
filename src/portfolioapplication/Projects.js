import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projectsToShow, setProjectsToShow] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    fetch('https://dhanushriportfoliodatabase1.onrender.com/projectspage')
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        setProjects(data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleViewMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setProjectsToShow((prev) => prev + 6);
      setLoadingMore(false);
    }, 1000);
  };

  const handleDemoClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDemo = () => {
    setSelectedProject(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {/* Projects Container - Blur when a project is selected */}
      <div className={`projects-container ${selectedProject ? 'blur' : ''}`}>
        <h1 className="skillsheading">PROJECTS</h1>
        <div className="cards-container">
          {projects.slice(0, projectsToShow).map((project) => (
            <div className="project-card" key={project.id} data-aos="fade-up">
              <div className="image-container" data-aos="zoom-in">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <h5 className="project-titles" data-aos="fade-left">{project.title}</h5>
              <p data-aos="fade-right">{project.description}</p>

              <div className="technologies" data-aos="slide-up">
                <strong>Technologies Used:</strong>
                <ul>
                  {project.technologies.map((tech, index) => (
                    <li key={index} data-aos="flip-left">{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="button-container" data-aos="zoom-out" data-aos-delay="200">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button>View Project</button>
                </a>
                <button className="demo demohead" onClick={() => handleDemoClick(project)}>Demo</button>
              </div>
            </div>
          ))}
        </div>

        {projects.length > projectsToShow && (
          <div className={loadingMore ? "view-more-container2" : "view-more-container"} data-aos="fade-up">
            <button onClick={handleViewMore}>
              {loadingMore ? 'Loading...' : 'View More...'}
            </button>
          </div>
        )}
      </div>

      {/* Video Fullscreen - Outside Projects Container */}
      {selectedProject && (
        <div className="video-fullscreen" data-aos="fade-up">
          <div className="video-content">
            <div className="video-header">
              <h3>{selectedProject.title} - Demo</h3>
              <button className="close-btn" onClick={handleCloseDemo}>X</button>
            </div>
            <iframe
  src={selectedProject.demoVideoLink}
  width="480"
  height="270"
  allowFullScreen
  frameBorder="0"
  allow="autoplay; encrypted-media"
></iframe>

          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
