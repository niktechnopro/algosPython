import React, {Component} from "react";
import styled from "styled-components";
import 'font-awesome/css/font-awesome.min.css';
import img from '../bckg.jpg';
import img2 from '../opt.png';

class Contact extends Component{
  constructor(props) {
    super(props);
    this.state = {
       counter: 0,
       modalOpen: false,
      };
  }

  openResume = () => {
    this.setState({
      modalOpen: true
    })
  }

  closeResume = () => {
    let elem = document.querySelector('.resumeClose');
    let obj = document.querySelector('object');
    let pos = 50;
    let pos1 = 100;
    let id = setInterval(frame, 1);
    function frame() {
    if (pos < -50) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.top = pos + 'px'; 
    }
    if (pos1 < 0) {
      clearInterval(id);
    } else {
      pos1--; 
      obj.style.opacity = pos1/100;  
    }
  }
    setTimeout(()=>{
    elem.remove();
    obj.remove();
    this.setState({
      modalOpen: false
    })}, 1500);
  }

  render(){
    return (
      <div>
      <Wrapper>
      <p className="title">Contact Me</p>
      <hr />
      <div id="contactsection">
      <div className="leftsection">
        <article id="left-text">
          Want to get in touch with me? Be it to request more info about myself or my experience, to ask for my resume, random questions about the universe and the meaning of life, or to have a coffee with me... just feel free to drop me a line anytime.
          <p style={{textAlign: 'center'}}>I promise to reply A.S.A.P.</p>
        </article>	
      </div>
      <form className="rightsection" action="https://formspree.io/ciscoscholar@gmail.com" method="POST">
        <p className="titles">Contact Form</p>
        <input type='text' name="name" placeholder="name" required />
        <br />
        <input type="email" name="replyto" placeholder="email" required />
        <br />
        <textarea id="textarea" type="textarea" rows="4" name="message" placeholder="how can I help you?" required ></textarea>
        <br />
        <button name="submit" type="submit">send message</button>
      </form>
      </div>
      <div id="contact_bottom">
        <p className="title">Find me on:</p>
        <hr />
        <ul>
          <li className="tooltip">
            <span className="tooltiptext">click, to see my Linkedin page</span>
            <a target="_blank" rel="noopener noreferrer" className="linkedin" href="https://www.linkedin.com/in/niktechnopro"><i className="fa fa-linkedin"></i></a>
          </li>
          <li className="tooltip">
            <span className="tooltiptext">click, to see my GitHub page</span>
            <a rel="noopener noreferrer" target="_blank" className="github" href="https://github.com/niktechnopro"><i className="fa fa-github"></i></a>
          </li>
          <li className="tooltip">
            <span className="tooltiptext">check out my resume</span>
            <i onClick={this.openResume} className="fa fa-file-text-o"></i>
          </li>
        </ul>
        <hr />
      </div>
      {this.state.modalOpen && <div>
      <a rel="noopener noreferrer" onClick={this.closeResume} className="resumeClose"><i className="fa fa-window-close"></i></a>
      <object data="./resume/creativeResume.pdf#view=FitV" type="application/pdf" width="100%" height="850">
            <p id="resumeerror">
                It appears your Web browser is not configured to display PDF files. No worries,<br /><a rel="nofolow noopener noreferrer" href="./resume/creativeResume.pdf">just click here to download the PDF file.</a>
            </p>
        </object></div>}
      </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  padding: 20px;
  text-align: center;
  height: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  form p{
    font-size: 1.5rem;
    // margin-top: 0;
  }

  article p, .titles{
    font-size: 1.6rem;
    font-style: italic;
    line-height: 1.5rem;
    text-shadow: 0px 0px 0px ##969aa9, 1px 0px 0px #f4f3f74a;
  }

  i.fa{
    font-size: 36px !important;
    display: inline-block;
    border-radius: 48px;
    box-shadow: 0px 1px 3px black;
    padding: 0.3rem 1rem;
    transition: 300ms;
  }
  
  i.fa:hover {
    background-color: grey;
    box-shadow: 0px 3px 0px white;
    cursor: pointer;
  }

  #contact_bottom ul{
    list-style: none;
    display: inline;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem;
  }

  a{
    color: #000;
  }

  #contactsection{
    background-image: url(${img2});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 1rem;
    color: white;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover !important;
    letter-spacing: 0.1rem;
  }

  .rightsection{
    padding-top: 0;
  }
  
  div.leftsection{
    padding: 2rem 3rem 0 3rem;
    width: 80%;
    display: flex;
    text-align: center;
  }
  
  form.rightsection{
    padding: 0 3rem 2rem 3rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .rightsection input, textarea{
    height: 2rem;
    border-radius: 1rem;
    outline: none;
    font-size: 1.1rem;
    text-align: center;
  }
  
  .rightsection input:focus {
    text-align: center;
  }
  
  [type="submit"]{
    text-shadow: 0px 0px 0px #fff, 1px 0px 0px #000;
    font-weight: 600;
    padding: 0.5rem;
    border-radius: 10px;
    font-size: 1rem;
    margin: 0 auto;
    cursor: pointer;
    transition: 300ms;
    background-color: #8debeb;
  }
  
  [type="submit"]:hover {
    background-color: #6fef60;
    box-shadow: 0px 1px 3px black;
  }

  [type="submit"]:active {
    background-color: #8debeb;
  }
  
  #textarea{
    height: 4rem;
    border: 2px solid #aaa;
  }
  
  ::-webkit-input-placeholder{
    font-size: 1.2rem;
    text-align: center;
  }

  #contact_bottom .title{
    margin-top: 0.5rem;
    font-size: 2rem;
  }

  object{
    position: absolute;
    top: 0px;
    left: 0;
  }

  .resumeClose{
    background-color: white;
    position: fixed;
    top: 50px;
    right: 0;
    z-index: 888;
  }

  article{
    font-style: italic;
    font-size: 1.3rem;
    line-height: 1.5rem;
    text-shadow: 0px 0px 0px #fff, 1px 0px 0px #000;
  }

  #resumeerror{
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    transform: translate(-50%,-50%);
    background-color: rgba(255,255,255,0.9);
    padding: 10%;
    width: 60%;
    border-radius: 15px;
    font-size: 1.5rem;
    font-style: italic;
    font-size: 1.3rem;
    line-height: 1.5rem;
    text-shadow: 0px 0px 0px #fff, 1px 0px 0px #000;
  }


  @media only screen and (min-width: 1180px) {
    #contactsection{
      flex-direction: row;
      max-width: 90%;
      margin: 0 auto;
    }

    .resumeClose{
      top: 100px;
    }

    div.leftsection{
      padding: 0 3rem;
    }

    .title{
      margin-top: 5%;
      padding: 1.5rem;
    }

`;

export default Contact;