import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

function Skills() {
  const [skillsData, setSkillsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 200, 
      easing: 'ease-out-quint', 
      once: true, 
    });
    AOS.refresh();
    fetch('https://dhanushriportfoliodatabase1.onrender.com/skillspage')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setSkillsData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container ">

      <h1 className="my-4 text-center skillsheading skil" data-aos="fade-up" data-aos-delay="100">
        SKILLS
      </h1>
      <div className="row">

        <div
          className="col-lg-4 col-md-6 mb-4"
          data-aos="flip-left"
          data-aos-delay="100"
        >
          <h2 className="heading" data-aos="fade-right" data-aos-delay="200">Interests</h2>
          {skillsData.interests.map((interest, index) => (
            <div
              className="card mb-3"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img
                    src={interest.logo}
                    alt={interest.title}
                    className="card-img-top"
                  />
                  <p className="card-title ml-2 intereststyle">{interest.title}</p>
                </div>
                <p className="card-text">{interest.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="col-lg-4 col-md-6 mb-4"
          data-aos="fade-up"
          data-aos-delay="100">
          <h2 className="heading" data-aos="fade-left" data-aos-delay="200">Technical</h2>
          {skillsData.technologies.map((tech, index) => (
            <div
              className="list-group-item mb-2"
              key={index}
              data-aos="fade-right"
              data-aos-delay={`${index * 50}`} >
              <div className="d-flex justify-content-between align-items-center">
                <span>{tech.name}</span>
                <span>{tech.progress}%</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${tech.progress}%`,
                    '--progress-width': `${tech.progress}%`,
                  }}
                  aria-valuenow={tech.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="col-lg-4 col-md-6 mb-4"
          data-aos="flip-right"
          data-aos-delay="200"
        >
          <h2 className="heading" data-aos="fade-left" data-aos-delay="500">Interpersonal</h2>
          {skillsData.interpersonalSkills.map((skill, index) => (
            <div
              className="list-group-item mb-2"
              key={index}
              data-aos="bounce-in"
              data-aos-delay={`${index * 20}`} 
            >
              <div className="d-flex justify-content-between align-items-center">
                <span>{skill.name}</span>
                <div>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`star ${i < skill.rating ? 'text-warning' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4"></div>
    </div>
  );
}

export default Skills;
