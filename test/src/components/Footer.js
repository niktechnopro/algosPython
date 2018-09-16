import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
        <footer>
		    <span>&copy; Nikolas's personal page</span>
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
`;

export default Footer;