import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <div className="title">Welcome to My Page!</div>
      <section>
        <p>This page was developped with React</p>
      </section>
    </Wrapper>
  );
}


const Wrapper = styled.div`
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