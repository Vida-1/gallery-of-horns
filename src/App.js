import React from 'react';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer.js';
import Modal from 'react-bootstrap/Modal';
import hornedbeastdata from './hornedbeastdata.json';
import SelectedBeast from './SelectedBeast.js'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalDisplaying: false,
      selectedBeast: {}, 
    }
  }

  openModalHandler = (name, img, description) => {

    let beast = {
      name: name,
      img: img,
      description: description
    }

    this.setState({
      isModalDisplaying: true,
      selectedBeast: beast,
    });
  }


  closeModalHandler = () => {
    this.setState({
    isModalDisplaying: false,
    });
  }

  render() {
  return (
    <>
      <Header />
      <Main
        openModalHandler={this.openModalHandler}
        data={hornedbeastdata}
      />

      <Footer />
      <SelectedBeast
        isModalDisplaying={this.state.isModalDisplaying}
        selectedBeast={this.state.selectedBeast}
        closeModalHandler={this.closeModalHandler}
      />
    </>
  );
}
}

export default App;
