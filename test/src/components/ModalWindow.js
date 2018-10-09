import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 300
  }
};

function ModalWindow(props){
  return(
    <div>
      <Modal
        isOpen={true}
        // onAfterOpen={this.afterOpenModal}
        // onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h2>
        It appears your Web browser is not configured to display PDF files. No worries, just <a rel="nofolow" href="./resume/creativeResume.pdf">click here to download the PDF file.</a>
        </h2>
      </Modal>
    </div>
  )
}

export default ModalWindow;
