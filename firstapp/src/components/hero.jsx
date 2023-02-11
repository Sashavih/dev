//import React from "react";
import './hero.css';

function Hero(props) {
    return (
        <div className="hero-card">
            <div className='hero-img'><img src={props.url} alt='hero' /></div>
            <div className='hero-text'>
                <div className="hero-name">{props.name}</div>
                <div className="hero-city"><span className='color'>Откуда:</span> {props.city}</div>
                <div className="hero-about"><span className='color'>О герое</span>: {props.about}</div>
                {props.friend && <div className="hero-friend"><span className='color'>Друг:</span> {props.friend}</div>}
            </div>
        </div>
    );
}
export default Hero;

/*class Hero extends React.Component {
    render() {
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