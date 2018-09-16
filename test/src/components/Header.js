import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <p>Hi, my name is Nikolas</p>

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
  min-width: 305px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  p{
    display: none;
  }

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
    }
  }
`;

export default Header;