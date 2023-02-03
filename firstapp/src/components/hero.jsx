//import React from "react";
import './hero.css';

function Hero(props) {
    return (
        <div className="hero-card">
            <div className='hero-img'><img src={props.url} /></div>
            <div className='hero-text'>
                <div className="hero-name">{props.name}</div>
                <div className="hero-city">Откуда: {props.city}</div>
                <div className="hero-about">О герое: {props.about}</div>
                {props.friend && <div className="hero-friend">Друг: {props.friend}</div>}
            </div>
        </div>
    );
}
export default Hero;
//<div className="hero-friend">({props.friend} == undefined) ? '' : Друг: {props.friend}</div>
/*class Hero extends React.Component {
    redder() {
        const { name, url, city, about, friend } = this.props;
        return (
            <div className="hero-card">
                <img src={url} />
                <div className="hero-name">{name}</div>
                <div className="hero-city">{city}</div>
                <div className="hero-about"> {about}</div>
                <div className="hero-friend"> {friend}</div>
            </div>

        );
    }
}*/