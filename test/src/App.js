import React, { Component } from 'react';
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';


const App = () => {
    return (
      <Wrapper>
        <Header />
        <Container />
        <Footer />
      </Wrapper>
    );
}

const Wrapper = styled.div`
  
`;

export default App;
