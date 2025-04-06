import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Journey from './Journey';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content2: '',
      content3: '',
      image: '',
      cv: '', 
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://dhanushriportfoliodtbase.onrender.com/homepage');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      this.setState({
        content: data.content || 'No content available',
        content2: data.content2 || 'No additional content available',
        content3: data.content3 || 'No third content available',
        image: data.image || '',
        cv: data.cv || '', 
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false, error: error.message });
    }
  }

  render() {
    const { content, content2, content3, image, cv, loading, error } = this.state;

    return (
      <section id="home-section">
        <Container fluid className="homeBackground py-5">
          <header>
            <p className="mt-custom py-3">Hello ♥</p>
            <h3 className="mt-custom2">I’m Dhanushri Chandrasekaran</h3>
          </header>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-danger text-center">Error: {error}</p>
          ) : (
            <Row>
              <Col xs={12} md={6} lg={5} className="home-content px-md-5">
                <p>
                  As a <span>Frontend Developer</span>, I artfully combine design and functionality to deliver seamless, intuitive web experiences.
                </p>
                {cv && (
                  <a href={cv} download="dhanushri_resume.pdf">
                  <Button className="mb-2 downloadbutton downloadbutton2">
                  Review CV
                  </Button>
                </a>
                
                )}
                <p className="mt-2">{content2}</p>
                <p className="feelfree">
                  Feel free to reach out – Let's make great things happen together!
                </p>
              </Col>
              {image && (
                <Col xs={12} md={6} lg={7} className="px-md-5">
                  <img
                    className="myimage img-fluid"
                    src={image}
                    alt="Homepage visual"
                    loading="lazy"
                  />
                </Col>
              )}
            </Row>
          )}
          <section id="about-section">
            <About />
          </section>
          <section id="journey-section">
            <Journey />
          </section>
          <section id="skills-section">
            <Skills />
          </section>
          <section id="projects-section">
            <Projects />
          </section>
          <section id="contact-section">
            <Contact />
          </section>
        </Container>
      </section>
    );
  }
}

export default Home;
