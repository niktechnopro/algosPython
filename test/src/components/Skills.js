import React from "react";
import styled from "styled-components";

let Skills = () => {
  return (
    <Wrapper>
      <section id="other">
        <p className="title">Technologies I worked with</p>
        <hr />
        <div id="logos">
          <div className="tooltip">
            <span className="tooltiptext">GitHub - a repository hosting service. This page is hosted on GitHub Pages</span>
            <img className="git-hub logo" src="./images/assets/github-logo.svg" alt="github logo" />
          </div>
          <div className="tooltip">
            <span className="tooltiptext">Git - the most widely used modern version control system, I can't imagine my life without it</span>
            <img className="logo" src="./images/assets/git-logo.svg" alt="git logo" />
          </div>
          <div className="tooltip">
            <span className="tooltiptext">NodeJS+Express - a popular web framework - I use it for my backend needs</span>
            <img className="logo" src="./images/assets/nodejs-logo.svg" alt="Nodejs logo" />
          </div>
          <div className="tooltip">
            <span className="tooltiptext">jQuery - write less do more</span>
            <img className="logo" src="./images/assets/jquery-logo.svg" alt="jQuery logo" />
          </div>
          <div className="tooltip aws">
            <span className="tooltiptext">I played with EC2 on AWS - a secure cloud services platform</span>
            <img className="logo" src="./images/assets/aws-logo.svg" alt="aws logo" />
          </div>
          <div className="tooltip">
            <span className="tooltiptext">Apache - the most widely used web server software</span>
            <img className="logo" src="./images/assets/apache-logo.svg" alt="apache logo" />
          </div>
          <div className="tooltip">
            <span className="tooltiptext">MySQL - the most popular and widely used database</span>
            <img className="mysql logo" src="./images/assets/mysql-logo.svg" alt="MySql logo" />
          </div>
          <div className="tooltip">
            <span className="tooltiptext">Python -  general-purpose programming language</span>
            <img className="logo" src="./images/assets/python-logo.svg" alt="Python logo" />
          </div>
          <div className="tooltip" id="js">
            <span className="tooltiptext">JavaScript - object-oriented scripting language</span>
            <img className="js logo" src="./images/assets/js-logo.svg" alt="js-logo" />
          </div>
          <div className="tooltip">
            <span className="tooltiptext">HTML5 - markup language that defines the structure of an HTML page</span>
            <img className="js logo" src="./images/assets/html5-logo.svg" alt="HTML5 logo" />
          </div>
          <div className="tooltip">
            <span className="tooltiptext">CSS - tells the browser how to present data, I learn new tricks all the time</span>
            <img className="js logo" src="./images/assets/css-logo.svg" alt="CSS logo" />
          </div>
          <div className="tooltip">
            <span className="tooltiptext">PostgreSQL - the advanced open source database system</span>
            <img className="logo" src="./images/assets/postgresql-logo.svg" alt="PostgreSQL logo" />
          </div>
          <div className="tooltip">
            <span className="tooltiptext">ReactJS - a declarative, efficient, and flexible JavaScript library for building user interfaces</span>
            <img className="logo" src="./images/assets/react-logo.svg" alt="React logo" />
          </div>
          <div className="tooltip">
            <span className="tooltiptext">Redux - is a predictable state container for JavaScript apps</span>
            <img className="logo" src="./images/assets/redux-logo.svg" alt="Redux logo" />
          </div>
        </div>
      </section>
      <section id="skills">
        <p className="title">Skills I picked up while working for AT&T</p>
        <hr />
        <div id="projects">
          <div className="tooltip card"><a rel="nofolow noopener noreferrer" target="_blank" className="github" href="https://www.youracclaim.com/badges/f1f4c0e4-6557-4613-8fd0-418b6a4b40b3/public_url">
            <span className="tooltiptext">Click on me</span>
            <img src="./images/certs/Aplus.png" alt="A+ badge" /></a>
          </div>
          <div className="tooltip card">
            <span className="tooltiptext">Click on me</span><a rel="nofolow noopener noreferrer" target="_blank" className="github" href="https://www.youracclaim.com/badges/e319109b-607b-4de6-b0da-a904a0290efa/public_url">
            <img src="./images/certs/NetworkPlus.png" alt="Network+ badge" /></a>
          </div>
          <div className="tooltip card"><a rel="nofolow noopener noreferrer" target="_blank" className="github" href="https://www.youracclaim.com/badges/f2fab3c3-a902-44a3-87a9-794207a464f0/public_url">
            <span className="tooltiptext">Click on me</span>
            <img src="./images/certs/SecurityPlus.png" alt="security+ badge" /></a>
          </div>
          <div className="tooltip card"><a rel="nofolow noopener noreferrer" target="_blank" className="github" href="https://www.youracclaim.com/badges/d57cf28e-1340-4705-99a3-69802bd4b9e9/public_url">
            <span className="tooltiptext">Click on me</span>
            <img src="./images/certs/CIOS.png" alt="CIOS badge" /></a>
          </div>
          <div className="tooltip card"><a rel="nofolow noopener noreferrer" target="_blank" className="github" href="https://www.youracclaim.com/badges/2f1d0793-53e7-44b7-a0cb-6841b0d05e0c/public_url">
            <span className="tooltiptext">Click on me</span>
            <img src="./images/certs/CSIS.png" alt="CSIS badge" /></a>
          </div>
          <div className="tooltip card"><a rel="nofolow noopener noreferrer" target="_blank" className="github" href="https://www.youracclaim.com/badges/5fed44d5-a72e-4f09-9762-a6001d0f121b/public_url">
            <span className="tooltiptext">Click on me</span>
            <img id="juniper" src="./images/certs/JNCIA.png" alt="JNCIA" /></a>
          </div>
          <div className="tooltip card"><a rel="nofolow noopener noreferrer" target="_blank" className="github" href="https://www.youracclaim.com/badges/cee493bc-a7e3-43c7-8e3d-9fa7fbcd871b/public_url">
            <span className="tooltiptext">Click on me</span>
            <img src="./images/certs/CCNA.png" alt="CCNA" /></a>
          </div>
          <div className="tooltip card"><a rel="nofolow noopener noreferrer" target="_blank" className="github" href="https://www.youracclaim.com/badges/298adf90-1fce-4b72-8e5c-f3d61f9a6c9b/public_url">
            <span className="tooltiptext">Click on me</span>
            <img src="./images/certs/CCNASEC.png" alt="CCNASEC" /></a>
          </div>
        </div>	
	    </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  // background-color: #b0d3da;
  // background-color: #fff;
  padding: 20px;

  #other{
    border: 3px solid blue;
    margin-bottom: 1rem;
  }

  .logo{
    margin-top: 1rem;
    width: 3.5rem;
    box-shadow: 0px 0px 0px rgba(0,0,0,0.15);
    transition: box-shadow 0.2s ease-in-out;
    padding: 0 1.2rem;
    transition: 0.3s all ease-in-out;
  }

  .logo:hover{
    transform: scale(1.2);
  }
  
  .aws .logo{
    width: 4.5rem;
    margin-bottom: 1rem;
  }

  .aws{
    margin-top: 1rem;
  }
  
  .js{
    margin-top: 0.5rem;
    width: 3rem;
  }
  
  #logos{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 1.1rem;
  }
  
  p{
    font-size: 1.5rem;
  }

  #skills{
    margin-top: 1rem;
    border: 3px solid blue;
  }

  .card img{
    width: 8rem;
  }

  #projects{
    text-align: center;
  }

  @media only screen and (min-width: 780px){
    #logos{
      margin: 2rem 2rem;
    }

    .card img{
      width: 10rem;
    }

    .logo{
      margin-top: 1rem;
      padding: 1rem 2rem;
    }
  }  
`;

export default Skills;