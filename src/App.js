import React from 'react';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer.js';
import Modal from 'react-bootstrap/Modal';
import hornedbeastdata from './hornedbeastdata.json';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hearts: '',                                   //flag
      isModalDisplaying: false,
      beastDescription: ''                          //flag
    }
  }


  openModalHandler = (beast) => {
    this.setState({
      isModalDisplaying: false,
      beastDescription: beast
    });
  }

  closeModalHandler = () => {
    this.setState({
      isModalDisplaying: false
    });
  }


  render() {
    return (
      <>
        <Header />
        <Main
          openModalHandler={this.ModalHandler}
        />
        <Footer />

        <Modal
          show={this.state.isModalDisplaying}
          onHide={this.closeModalHandler}
        >
          <Modal.Title>{this.state.beastDescription}This is a test</Modal.Title>
        </Modal>

      </>
    );
  }
}

export default App;
