import React from 'react';
import './App.css';
import Hero from './components/hero';
import HeroLogo from './components/logo';
import herous from './utils/cards';


class HeroApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroLogo></HeroLogo>
        <div className='HeroApp'>{
          herous.map((hero, index) =>
            <Hero key={index} name={hero.name} url={hero.url} city={hero.city} about={hero.about} friend={hero.friend}></Hero>
          )
        }
        </div>
      </React.Fragment>
    );

  }
}


export default HeroApp;

