import React from 'react';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer.js';
import Modal from 'react-bootstrap/Modal';
import hornedbeastdata from './hornedbeastdata.json';
import SelectedBeast from './SelectedBeast.js'
import FilterForm from './FilterForm';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalDisplaying: false,
      selectedBeast: {},
      data: hornedbeastdata
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

  updateFilteredBeasts = (filteredBeastArray) => {
    this.setState({ data: filteredBeastArray });
  }
  // Attribution: Special thanks to TA Ben Mills for helping me find the bugs and get this FilterForm feature to work properly!!!
  render() {
    return (
      <>
        <Header />
        <FilterForm data={hornedbeastdata}
          upFiltBeasts={this.updateFilteredBeasts} />
        <Main
          openModalHandler={this.openModalHandler}
          data={this.state.data}
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
