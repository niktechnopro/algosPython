import React from "react";
import styled from "styled-components";

function First() {
  return (
    <Wrapper>

    <p className="title">Projects</p>
		<hr />

    <div className="cardWrapper">
      <p>Full-Stack Project</p>  
      <div className="item-space">
        <figure>
            <img src="./images/Portfolio/locdocscreenshot.png" alt="Loc Doc Screenshot" />
            <figcaption>
                <h3>LocDoc</h3>
                <span className="fixer">React Redux NodeJS<p>Geolocation API and Doctor API Project</p></span>
                <a rel="nofolow" target="_blank" href="https://github.com/niktechnopro/LocDoc" className="button">GitHub</a>
            </figcaption>
        </figure>
        <p className="desc">
          LocDoc - A powerful tool that enables the user to find a local doctor
        </p>
      </div>
    </div>

    <div className="cardWrapper">
      <p>Front-End Project</p>  
      <div className="item-space">
        <figure>
            <img src="./images/Portfolio/focus.png" alt="Focus! Screenshot" />
            <figcaption>
                <h3>Focus!</h3>
                <span className="fixer">Front End Project<p>HTML, Bootstrap/CSS, jQuery</p></span>
                <a rel="nofolow" target="_blank" href="https://github.com/niktechnopro/Focus" className="button">GitHub</a>
            </figcaption>
        </figure>
        <p class="desc">
          Focus! - A timer based on the Pomodoro time management technique that includes entertainment
        </p>
      </div>
    </div>

    <div className="cardWrapper">
      <p className>Hackathon Project</p>  
      <div className="item-space">
        <figure>
            <img src="./images/Portfolio/village.png" alt="Village scresnshot" />
            <figcaption>
                <h3>Focus!</h3>
                <span class="fixer">Hackaton against violence Project <p>HTML, Bootstrap/CSS, jQuery, Node.js, Express, MySQL</p></span>
                <a rel="nofolow" target="_blank" href="https://github.com/niktechnopro/Village" className="button">GitHub</a>
            </figcaption>
        </figure>
        <p className="desc">
          Village - A webapp that builds emotional intelligence in adolescent children
        </p>
      </div>
    </div>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  // background-color: #00d38a;
  padding: 20px;

  .cardWrapper{
    margin: 0 auto;
    max-width: 400px;
  }

  .cardWrapper p{
    text-align: center;
  }

  .item-space{
    list-style: none;
    dispalay: flex;
    justify-content: center;
    padding-bottom: 40px;
  }

  .item-space img{
    width: 100%;
  }
  
  .item-space figure {
    max-width: 400px;
    margin: 0;
    position: relative;
  }
  
  .item-space figure img {
    max-width: 100%;
    display: block;
    position: relative;
  }
  
  .item-space figcaption {
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px;
    background: #111;
    color: #e66f69;
  }
  
  .item-space figcaption h3 {
    margin: 0px 0px 8px 0px;
    padding: 0;
    color: #fff;
  }
  
  .item-space figcaption a {
    text-align: center;
    padding: 8px 15px;
    display: inline-block;
    color: #fff;
  }
  
  .item-space figure {
    overflow: hidden;
  }
  
  .item-space figure img {
    transition: transform 0.4s;
  }
  
  .item-space figure:hover img{
    transform: translateY(-25px) scaleX(1.01);
  }
  
  .item-space figcaption a {
    position: absolute;
    bottom: 31px;
    right: 3rem;
  }
  .button{
    background: transparent;
    border: 1px solid #fff;
    transition: 0.4s ease;
  }
  .button:hover {
    text-decoration: none;
    background: white;
    color: #000;
  }
  
  .item-space figcaption {
    height: 71px;
    width: 100%;
    top: auto;
    bottom: 0;
    opacity: 0;
    transform: translateY(100%);
    transition: transform 0.4s, opacity 0.1s 0.3s;
  }
  
  .item-space figure:hover figcaption {
    opacity: 1;
    transform: translateY(0px);
    transition: transform 0.4s, opacity 0.1s;
  }

  .fixer{
    font-size: 0.8rem;
  }
  
  .desc{
    color: black;
    font-size: 1rem;
    text-align: center;
    font-family: Lobster, Sans-Serif;
    margin-bottom: 0;
  }
`;

export default First;