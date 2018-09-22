import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <section>
        <div className="title">Hello, my name is Nikolas</div>
        <article>
        <img src="./images/profile.jpg" alt="Nikolas's image" />
				<span>I was trained as an electronics engineer in my home country Latvia. I spent some time working in the consumer electronics industry while earning CompTIA certifications, that provided me with a solid grounding in the technology concepts and practices. The need for basic network troubleshooting, prompted me take CS Computer Networks class from GA Tech in addition to certifying with Cisco and Juniper. Diving into computer programming was a logical choice from there. I started with Python, played with Ruby and transitioned into JavaScript.
        <p>I strongly believe that software development is a fun and exciting way to challenge  problem-solving skills and creativity. It allows me to have a career filled with learning.</p>
				</span>
			</article>
    </section>
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

`;

export default Home;