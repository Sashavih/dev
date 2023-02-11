import React from "react";
import styles from './cardBox.scss';
import * as classnames from 'classnames';


export default class Card extends React.Component {
    render() {
        const { rate, currency, price, speed, footer, id, color } = this.props;

        return (
            <div className="cardBox ">
                <div className={color}>
                    <p className="rate">{rate}</p>
                    <div className="price-box"><p className="currency">{currency}</p><p className="price">{price}</p>
                    </div>
                </div>
                <p className="speed">{speed}</p>
                <p className="footer">{footer}</p>
            </div>

        );
    }

}


