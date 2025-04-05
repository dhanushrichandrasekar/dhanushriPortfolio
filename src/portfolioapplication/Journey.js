import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Journey = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const journeyData = [
    {
      year: "2025",
      event: "B.E in Computer Science and Engineering",
      institution: "Sethu Institute of Technology (Anna University)",
      result: "CGPA: 7.991 (Up to 7th Semester)",
    },
    {
      year: "2021",
      event: "HSC Examination",
      institution: "The TVS School",
      result: "Percentage: 87%",
    },
    {
      year: "2019",
      event: "SSLC Examination",
      institution: "The TVS School",
      result: "Percentage: 85%",
    },
  ];

  return (
    <div className="journey-container">
      <h2 className="jour " data-aos="fade-up"> EDUCATION JOURNEY</h2>

      <div className="timeline">
        <div className="timeline-line"></div>

        {journeyData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="timeline-circle">{item.year}</div>

            <div className="timeline-content" data-aos="zoom-in">
              <h5 className="event-title">{item.event}</h5>
              <p className="event-institution">
                <strong>Institution:</strong> {item.institution}
              </p>
              <p className="event-result">
                <strong>{item.result.includes("CGPA") ? "CGPA" : "Percentage"}:</strong> {item.result.split(":")[1]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
