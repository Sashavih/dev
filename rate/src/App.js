import React from 'react';
import './App.css';
import cards from './utils/cards';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <>{
        cards.map((card) =>
          <Card key={card.id} {...card} />

        )
      }
      </>

    );
  }
}
export default App;
