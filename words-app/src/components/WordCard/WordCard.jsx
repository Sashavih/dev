import React from "react";
import './WordCard.scss';

class WordCard extends React.Component {
    render() {
        return (
            <div className="card-box">
                <h2>WORD</h2>
                <div className="card-box__text">
                    <p className="card-box__transcription">Транскрипция:</p>
                    <p className="card-box__translate">Перевод:</p>
                    <p className="card-box__topic">Тема:</p>
                </div>
            </div>
        )
    }
}

export default WordCard;