import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 50px;
  position: fixed;
  top: 0;
  z-index: 90;
  width: 100%;
  min-width: 305px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    padding: 0.5rem;

    a {
      text-decoration: none;
      font-size: 20px;
      color: #333;
      font-weight: 600;
    }
  }

  li:hover{
    a{
      color: white;
    }
  }

  
  li:before,
  li:after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    // background: #259f6c; /* onhover background color */
    background: #015460;
    z-index: -1;
    transform: translate3D(0,-100%,0); /* move elements above button so they don't appear initially */
    transition: all .4s;
  }

  li{
    transform-style: preserve-3d;
  }

  li:before,
  li:after{
    transform-origin: center center;
    transform: scale(1,0);
  }


  li:hover:before,
  li:hover:after{
    transform: scale(1);
    border-radius: 0.5rem;
    box-shadow: 0px 1px 2px black;
  }

  li:active:before,
  li:active:after{
    transform: scale(1);
    border-radius: 0.5rem;
    box-shadow: 0px 0px 0px white;
  }

  @media only screen and (min-width: 780px) {
      height: 100%;
      width: 160px;
      position: fixed;
      // z-index: 1;
      top: 0;
      left: 0;
      background-color: #f5f5f5;
      justify-content: center;
      overflow-x: hidden;
      padding-top: 20px;
      align-items: flex-start;
    
    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    li {
      display: block;
      padding: 1.5rem;
  
      a {
        text-decoration: none;
        font-size: 3.2rem;
        color: #blue;
        font-weight: 600;
        padding: 1.5rem;
      }
    }
  }

  @media only screen and (max-width: 340px) {
    li {
    display: inline-block;
    padding: 0.2rem;

    a {
      text-decoration: none;
      font-size: 1.3rem;
      color: #333;
      font-weight: 600;
    }
  }
  }
`;

export default Header;