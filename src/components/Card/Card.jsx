import React from "react";
import styles from "./Card.module.scss";

export const Card = (props) => {
    const { title, price, imageUrl, onPlus } = props;

    const [checked, setChecked] = React.useState(false);

    const onHandleClick = () => {
        onPlus({ title, price, imageUrl });
        setChecked((checked) => !checked);
    };

    return (
        <div className={styles.Card}>
            <div className={styles.bookmarks}>
                <img src={"/img/unliked.svg"} alt="Иконка избранное" />
            </div>
            <div className={styles.img}>
                <img src={imageUrl} alt="кроссовки" />
            </div>
            <p className={styles.title}>{title}</p>
            <div className={styles.price}>
                <div>
                    <p>Цена:</p>
                    <div>
                        {price} <span>₽</span>
                    </div>
                </div>
                <button onClick={onHandleClick}>
                    <img
                        src={
                            checked
                                ? "/img/btn-checked.svg"
                                : "/img/btn-unchecked.svg"
                        }
                        alt="check"
                    />
                </button>
            </div>
        </div>
    );
};
