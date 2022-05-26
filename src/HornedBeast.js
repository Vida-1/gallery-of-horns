import React from 'react';
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

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

  beastModalActivate = () => {
    this.props.openModalHandler(this.props.title,
      this.props.imageURL,
      this.props.description)
  };


  // I didn't understand how to start working with Cards until Dana Huffman shared in class code review so TY to her!!
  render() {
    return (
      <>
        <Col className="mb-4">
          <Card className="beastCards h-100">

            <article>

              <Card.Title>{this.props.title}</Card.Title>
              <Card.Subtitle>{this.props.name}</Card.Subtitle>

              <div id="likeLine">
                <Card.Text>❤️ {this.state.hearts} Likes</Card.Text>
                <Card.Text onClick={this.likeBeast}>Like Me!</Card.Text>
              </div>

              <Card.Text>{this.props.description}</Card.Text>

              <Card.Img
                src={this.props.imageURL}
                alt="beast"

                onClick={this.beastModalActivate}
              />

            </article>

          </Card>
        </Col >
      </>
    )
  };
}

export default HornedBeast;