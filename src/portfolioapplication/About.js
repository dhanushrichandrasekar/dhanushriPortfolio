import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import 'animate.css';

function About() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  useEffect(() => {
    fetch('https://dhanushriportfoliodatabase1.onrender.com/aboutpage') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setAboutData(data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false); 
      });
  }, []);
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner">Loading...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        <p>Error fetching data: {error}</p>
      </div>
    );
  }
  if (!aboutData || !aboutData.content || aboutData.content.length === 0) {
    return (
      <div className="no-content">
        <p>No content available to display.</p>
      </div>
    );
  }

  return (
    <Container fluid className="py-5 about">
      <Row >
        {aboutData.image && (
          <Col xs={12} sm={12} md={6} className=" animate__animated animate__fadeInLeft">
            <img
              src={aboutData.image}
              alt="About visual"
              id="abtimg"
              loading="lazy"
              className="img-fluid rounded hover-zoom animate__animated animate__fadeIn animate__delay-2s"
            />
          </Col>
        )}
        <Col xs={12} sm={12} md={6} className="animate__animated animate__fadeInRight animate__delay-3s">
          <div className="about-content">
            {aboutData.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
