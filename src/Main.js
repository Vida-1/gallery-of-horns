import React from 'react';
import HornedBeast from './HornedBeast';
import hornedbeastdata from './hornedbeastdata.json';
import './Main.css';
import './HornedBeast.css'

class Main extends React.Component {
  render() {

    let allBeastsArr = [];

    hornedbeastdata.forEach((beast, idx) => {
      console.log(beast);
      allBeastsArr.push(<HornedBeast
        name={beast.name}
        imageURL={beast.image_url}
        title={beast.title}
        description={beast.description} />)
    });

    return (
      <main>
        {allBeastsArr}
      </main>
    );
  }
};

export default Main;