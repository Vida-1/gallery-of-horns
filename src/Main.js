import React from 'react';
import HornedBeast from './HornedBeast';

import './Main.css';
import './HornedBeast.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {

    let allBeastsArr = this.props.data.map((beast, idx) => {
      console.log(beast);
      return (
        <HornedBeast
          name={beast.name}
          imageURL={beast.image_url}
          title={beast.title}
          description={beast.description}
          openModalHandler={this.props.openModalHandler}
        />)
    });

    return (

      <Container>

        <main>
          <div className="beastRow">
            <Row sm={2} md={3} lg={4}>
              {allBeastsArr}
            </Row>
          </div>
        </main>

      </Container>
    );
  }
};

export default Main;