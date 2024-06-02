import React from 'react';
import Slider from 'react-slick';
import './Achievements.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Achievements = () => {
  const achievements = [
    { type: 'Internship', company: 'Tech Corp', role: 'Software Engineering Intern', period: 'June 2023 - August 2023' },
    { type: 'Internship', company: 'Web Solutions', role: 'Frontend Developer Intern', period: 'January 2023 - May 2023' },
    { type: 'Workshop', title: 'React Advanced Workshop', organization: 'Coding Academy', date: 'April 2023' },
    { type: 'Workshop', title: 'Node.js Bootcamp', organization: 'Dev Bootcamp', date: 'February 2023' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="achievements-container">
      <h2>Achievements</h2>
      <Slider {...settings}>
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-item">
            {achievement.type === 'Internship' ? (
              <>
                <h3>Internship</h3>
                <h4>{achievement.company}</h4>
                <p>{achievement.role}</p>
                <p>{achievement.period}</p>
              </>
            ) : (
              <>
                <h3>Workshop & Certification</h3>
                <h4>{achievement.title}</h4>
                <p>{achievement.organization}</p>
                <p>{achievement.date}</p>
              </>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Achievements;
