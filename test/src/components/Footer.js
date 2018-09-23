import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
        <footer>
		    <span id="small">&copy; Nikolas's personal page</span>
        <span id="big">&copy; This is my personal page and it was built with React.js</span>
	    </footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    min-width: 245px;
    max-height: 3rem;
    background-color: #f5f5f5;
    padding: 9px;
    z-index:98;

    #big{
      display: none;
    }

    @media only screen and (min-width: 780px){
      #small{
        display: none;
      }

      #big{
        display: block;
      }
    }
`;

export default Footer;