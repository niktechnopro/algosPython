import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <div className="title">Welcome to My Page!</div>
      <section>
        <p>Software development is a fun and exciting way to challenge  problem-solving skills and creativity. It allows me to have a career filled with learning.</p>
        <article>
				{/* <img src="./images/profile.jpg" /> */}
				<span>Being trained as an electronics technician and spending some time working in the consumer electronics industry I have naturally developed the interest in computers. Completing CompTIA training provided me with PC and OS fundamentals. The need for basic network troubleshooting, prompted me to learn and certify with Cisco and complete CS Computer Networks class, which introduced me to computer programming in Python. So I continued with Python and transitioned into JavaScript.
				
				And now I look to put my skills to use!</span>
			</article>
      </section>
      <p>Developped with React</p>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  padding: 1rem;
  min-height: calc(100vh - 50px);
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  div.title {
    font-size: 40px;
    font-weight: bold;
  }
  section {
    p {
      font-size: 20px;
    }
  }
`;

export default Home;