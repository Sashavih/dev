import React, { useState } from 'react';
import styles from './CardApp.scss';



function Card({ rate, price, speed, footer, id, }) {
    console.log(styles)

    let selected = "";
    const [checked, setChacked] = useState(false);
    const handleClick = () => {
        setChacked(prevState => !prevState);
    }
    selected = checked ? 'large' : '';
    return (
        <div onClick={handleClick} className={`cardBox ${selected} `}>
            <p className={`rate card${id} `}>{rate}</p>
            <p className={`price color${id}`}>{price}</p>
            <p >{speed}</p>
            <p className="footer">{footer}</p>
        </div>

    );
}
export default Card;