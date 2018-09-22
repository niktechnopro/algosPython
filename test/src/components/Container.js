import React, {Component} from 'react';
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

function Container({ location }) {
    return (
      <Wrapper>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 400, exit: 400 }}
            classNames="fade"
          >
            <section className="route-section">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/skills" component={Skills} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </Wrapper>
    );
  }
  
  const Wrapper = styled.div`
    margin-top: 3rem;
    
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 400ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }  
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 400ms ease-in;
    }

    div.transition-group {
      position: relative;
    }

    section.route-section {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
`;
  
  export default withRouter(Container);