import styles from './WordsList.module.scss'
import * as cn from 'classnames';

function WordsList({ english, transcription, russian, line, isFade, addedBtn, isClick, changeFont }) {
    const fade = cn(
        {
            [styles.fade]: isFade,
        },
    );
    const boldFont = cn(
        {
            [styles.boldFont]: changeFont,
        },
    );

    return (
        <div className={styles.table}>
            <div className={`${styles.purple} ${fade} `}>{line}</div>
            <div className={`${isClick ? styles.greenClick : styles.lightGreen} ${boldFont}`}>{english}</div>
            <div className={`${isClick ? styles.orangeClick : styles.orange} ${boldFont}`}>{transcription}</div>
            <div className={`${isClick ? styles.blueClick : styles.lightBlue} ${boldFont}`}>{russian}</div>
            <div className={styles.btnBox}> {addedBtn ? <button className={`${styles.lightGreen} ${styles.btn} ${styles.btnBig} ${styles.btnSave}`}></button>
                : ""}
                <button className={`${styles.sun} ${styles.btnSmall} ${styles.btnEdit} `}></button><button className={`${styles.pink} ${styles.btnSmall} ${styles.btnDelete} `}></button></div>

        </div >
    );
}
export default WordsList;
