import React from 'react';

class HornedBeast extends React.Component {
  render() {
    console.log(this.props.name);
    return (
      <>
        <article>
          <h2>{this.props.title}</h2>
          <h3>{this.props.name}</h3>
          <img src={this.props.imageURL} alt="beast" title={this.props.title} />
          <p>{this.props.description}</p>
        </article>
      </>
    );
  }
}

export default HornedBeast;

