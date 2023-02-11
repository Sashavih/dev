import React from 'react';
import './App.css';
import cards from './utils/cards';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div className='CardApp'>{
        cards.map((card) =>
          <Card key={card.id} {...card} />

        )
      }
      </div>

    );
  }
}
export default App;
