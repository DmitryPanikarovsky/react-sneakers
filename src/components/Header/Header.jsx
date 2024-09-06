import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/img/logo.svg" alt="Логотип" />
                <div className={styles.title}>
                    <div>React Sneakers</div>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className={styles.info}>
                <a href="#" className={styles["info-block"]}>
                    <img
                        className="img"
                        src="/img/cart.svg"
                        alt="Иконка корзины"
                    />
                    <div>
                        1205 <span>₽</span>
                    </div>
                </a>
                <a href="#" className={styles["info-block"]}>
                    <img
                        className="img"
                        src="/img/bookmarks.svg"
                        alt="Иконка закладок"
                    />
                    <div>Закладки</div>
                </a>
                <a href="#" className={styles["info-block"]}>
                    <img
                        className="img"
                        src="/img/profile.svg"
                        alt="Иконка профиля"
                    />
                    <div>Профиль</div>
                </a>
            </div>
        </header>
    );
};