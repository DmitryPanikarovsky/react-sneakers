import styles from './Card.module.scss';

export const Card = (props) => {
    const { title, price, imageUrl, addToFavorite, addToCart } = props;

    return (
        <div className={styles.Card}>
            <div className={styles.bookmarks} onClick={addToFavorite}>
                <img src="/img/heart-unliked.svg" alt="сердечко" />
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
                <button onClick={addToCart}>
                    <img src="/img/btn-unchecked.svg" alt="check" />
                </button>
            </div>
        </div>
    );
};
