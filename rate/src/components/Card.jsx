import React, { useState } from 'react';
import styles from './CardApp.scss';
import * as classnames from 'classnames';


export default function Card({ rate, price, speed, footer, id, isSelected }) {
    const className = classnames(
        {
            ['large']: isSelected,
        },
    );
    let selected = "";
    const [checked, setChacked] = useState(false);
    const handleClick = () => {
        setChacked(prevState => !prevState);
    }
    selected = checked ? 'large' : '';
    return (
        <div onClick={handleClick} className={`cardBox ${selected} ${className}`}>
            <p className={`rate ${className} card${id} `}>{rate}</p>
            <p className={`price color${id}`}>{price}</p>
            <p className={styles.card1}>{speed}</p>
            <p className="footer">{footer}</p>
        </div>

    );
}