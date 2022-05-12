import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast title="The Betrayer" name="Illidan Stormrage" imageURL="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/illidan-stormrage-art-19-mr-john.jpg" description="Illidan Stormrage, commonly known as the Betrayer, is the first of the demon hunters, the former self-proclaimed Lord of Outland, the former ruler of the Black Temple, and the original leader of the Illidari. Quoted from: https://wowpedia.fandom.com" />
        <HornedBeast title="The Lord of Terror" name="Al'Diabolos" imageURL="https://static.wikia.nocookie.net/gods_and_demons/images/6/60/Diablo_Raneman009c.png" description="Al'Diabolos, the Lord of Terror, more commonly known as Diablo, is the youngest of the three Prime Evils, and the titular main antagonist of the Diablo game series. Quoted from: diablo.fandom.com" />

      </main>
    );
  }
}

export default Main;