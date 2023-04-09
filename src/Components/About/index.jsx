import React from 'react';
import Loader from 'react-loaders';
import './index.scss';

function About() {
  return (
    <>
      <Loader type="ball-scale-ripple-multiple" />

      <div className="container about-page">
        <div className="text">
          <h1>ABOUT ME</h1>
          <p>
            I'm a highly motivated full-stack developer with a solid background
            in Business Administration. I'm on the lookout for opportunities
            that will let me work on exciting and challenging projects, using
            the latest and most innovative technologies. I'm all about attention
            to detail, and I have a natural curiosity that drives me to
            continuously learn and grow. I'm always looking for new challenges
            and opportunities to expand my skillset.
          </p>
          <p>
            I'm someone who's really passionate about staying up-to-date with
            the latest trends and advancements in software development. I'm
            constantly learning and expanding my technical skills to keep up
            with the rapidly evolving field. I've worked with a variety of
            programming languages, algorithms, and development methodologies,
            and I'm always looking for new ways to grow my expertise and stay
            ahead of the game.
          </p>
          <p>
            I'm not just a tech-savvy developer, but I'm also skilled in
            communicating and collaborating with different people from different
            backgrounds. This ability allows me to easily integrate into any
            project team, and work together with stakeholders and colleagues to
            deliver quality results. Whether I'm working independently or as
            part of a team, I always strive to exceed expectations and deliver
            tangible business value.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
