import React from "react";
import styled from "styled-components";

let Home = () => {
  return (
    <Wrapper>
      <div className="fullscreen-bg">
        <video loop muted autoPlay className="fullscreen-bg__video">
            <source src="./images/bg-video.mp4" type="video/mp4" />
        </video>
      </div>
        <div className="title">Hello, my name is Nikolas</div>
        <article>
        <img src="./images/profile.jpg" alt="myself" />
				<span>
            <p>I'm a full-stack developer with the interest in responsive design and best practices in web development. I have a strong passion to learn and implement, and strongly believe that software development is a fun and exciting way to challenge  problem-solving skills and creativity. It allows me to have a career filled with learning.</p>
            <br />   
            <div className="title">Brief Bio</div>       
          I was trained as an electronics engineer and spent some time working in the consumer electronics industry. As a personal development I have earned CompTIA certifications, that provided me with a solid grounding in the technology concepts and practices. The need for network troubleshooting, prompted me take CS Computer Networks class from GA Tech in addition to certifying with Cisco and Juniper. Diving into computer programming was a logical choice from there. I started with Python, played with Ruby and transitioned into JavaScript.
				</span>
			</article>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  padding: 2rem;
  text-align: center;

  .title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    font-style: italic;
    text-shadow: 0px 0px 0px #fff, 1px 0px 0px #000;
  }

  img {
    max-width: 5rem;
    border-radius: 50%;
    float: left;
    padding: 0 1rem;
  }

  article{
    font-style: italic;
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-shadow: 0px 0px 0px #fff, 1px 0px 0px #000;
  }

  .fullscreen-bg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    opacity: .15;
    overflow: hidden;
  }

  .fullscreen-bg__video {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  @media only screen and (min-width: 780px){
    padding: 2rem;


    img {
      max-width: 12rem;
      border-radius: 50%;
      float: left;
      padding: 0 1rem;
    }

    article{
      font-style: italic;
      font-size: 1.4rem;
      line-height: 2rem;
      text-shadow: 0px 0px 0px #fff, 1px 0px 0px #000;
    }

    div.title{
      margin-top: 1rem;
    }
  }

`;

export default Home;