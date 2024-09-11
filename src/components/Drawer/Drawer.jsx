import styles from "./Drawer.module.scss";

export const Drawer = (props) => {
    const { onClose, items = [] } = props;

    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <div className={styles.header}>
                    <h2>Корзина</h2>
                    <div onClick={onClose} className={styles.close}>
                        <img src="/img/btn-remove.svg" alt="close" />
                    </div>
                </div>
                <ul className={styles.products}>
                    {items.map((item) => (
                        <li key={item.id} className={styles.product}>
                            <div className={styles.img}>
                                <img src={item.imageUrl} alt="sneakers" />
                            </div>
                            <div className={styles["title-price"]}>
                                <p className={styles.title}>{item.title}</p>
                                <div>
                                    {item.price} <span>₽</span>
                                </div>
                            </div>
                            <button>
                                <img src="/img/btn-remove.svg" alt="remove" />
                            </button>
                        </li>
                    ))}
                </ul>
                <div className={styles.total}>
                    <ul className={styles.totalBlock}>
                        <li>
                            <p>Итого:</p>
                            <div className={styles.dashed}></div>
                            <div>
                                21 498 <span>₽</span>
                            </div>
                        </li>
                        <li>
                            <p>Налог 5%:</p>
                            <div className={styles.dashed}></div>
                            <div>
                                1074 <span>₽</span>
                            </div>
                        </li>
                    </ul>
                    <button className={styles.makeAn}>
                        Оформить заказ
                        <img src="/img/btn-arrow.svg" alt="стрелка" />
                    </button>
                </div>
            </div>
        </div>
    );
};
