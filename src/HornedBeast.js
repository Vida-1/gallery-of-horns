import React from 'react';
// import Main from './Main.js';
import './HornedBeast.css';
//import Button from 'react-boothstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: 0
    }
  }
  
  likeBeast = () => {
    this.setState({
      hearts: this.state.hearts + 1
    })
}

  render() {
    return (
      <>

        <article>
          <h2>{this.props.title}</h2>
          <h3>{this.props.name}</h3>
          <p>❤️ {this.state.hearts} Likes </p>
          <p onClick={this.likeBeast}> Like Me!</p>
          <img src={this.props.imageURL} alt="beast" title={this.props.title} />
          <p>{this.props.description}</p>

        </article>
      </>
    )
  };
};

export default HornedBeast;