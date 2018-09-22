import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <div class="fullscreen-bg">
        <video loop muted autoPlay className="fullscreen-bg__video">
            <source src="./images/bg-video.mp4" type="video/mp4" />
        </video>
      </div>
        <div className="title">Hello, my name is Nikolas</div>
        <article>
        <img src="./images/profile.jpg" alt="Nikolas's image" />
				<span>
            <p>I'm a full-stack developer with an interest in responsive design and best practices in web development. I have a strong passion for my work, and strongly believe that software development is a fun and exciting way to challenge  problem-solving skills and creativity. It allows me to have a career filled with learning.</p>   
            <div className="title">Brief Bio</div>       
          I was trained as an electronics engineer and spent some time working in the consumer electronics industry while earning CompTIA certifications, that provided me with a solid grounding in the technology concepts and practices. The need for basic network troubleshooting, prompted me take CS Computer Networks class from GA Tech in addition to certifying with Cisco and Juniper. Diving into computer programming was a logical choice from there. I started with Python, played with Ruby and transitioned into JavaScript.
				</span>
			</article>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  padding: 1rem;
  text-align: center;

  div.title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  img {
    max-width: 5rem;
    border-radius: 50%;
    float: left;
    padding: 0 1rem;
  }

  .fullscreen-bg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    opacity: .1;
    overflow: hidden;
  }

  .fullscreen-bg__video {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

`;

export default Home;