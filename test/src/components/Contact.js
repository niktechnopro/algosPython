import React from "react";
import styled from "styled-components";
import 'font-awesome/css/font-awesome.min.css';

const Contact = () => {
  return (
    <Wrapper>
      <p className="title">Contact Me</p>
		<hr />
	  <div id="contactsection">
		<div className="leftsection">
			<article>
				Want to get in touch with me? Be it to request more info about myself or my experience, to ask for my resume, random questions about the universe and the meaning of life, or to have a coffee with me... just feel free to drop me a line anytime.

				<p>I promise to reply A.S.A.P.</p>
			</article>	
		</div>
		<form className="rightsection" action="https://formspree.io/ciscoscholar@gmail.com" method="POST">
			<p>Contact Form</p>
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
			<p>Find me on:</p>
			<hr />
			<ul>
				<li className="tooltip">
					<span className="tooltiptext">click, to see my Linkedin page</span>
					<a rel="nofolow" target="_blank" className="linkedin" href="https://www.linkedin.com/in/niktechnopro"><i class="fa fa-linkedin"></i></a>
				</li>
				<li className="tooltip">
					<span className="tooltiptext">click, to see my GitHub page</span>
					<a rel="nofolow" target="_blank" className="github" href="https://github.com/niktechnopro"><i className="fa fa-github"></i></a>
				</li>
				<li className="tooltip">
					<span className="tooltiptext">check out my resume</span>
					<a rel="nofolow" href="tel:+1-770-235-8075"><i className="fa fa-file-text-o"></i></a>
				</li>
			</ul>
			<hr />
	  </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  padding: 20px;
  text-align: center;

  form p, article p{
    font-size: 1.5rem;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #add8e6;
    border-radius: 1rem;
  }
  
  div.leftsection{
    padding: 3rem 3rem 0 3rem;
    width: 80%;
    display: flex;
    text-align: center;
  }
  
  form.rightsection{
    padding: 3rem;
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
    box-shadow: 0px 1px 3px black;
    cursor: pointer;
    transition: 300ms;
    background-color: #8debeb;
  }
  
  [type="submit"]:hover {
    background-color: #6fef60;
  }
  
  #textarea{
    height: 4rem;
  }
  
  ::-webkit-input-placeholder{
    font-size: 1.2rem;
    text-align: center;
  }

  #contact_bottom p{
    margin-top: 1rem;
    font-size: 1.5rem;
  }


`;

export default Contact;