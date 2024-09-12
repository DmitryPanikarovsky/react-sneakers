import React from "react";
import styles from "./Drawer.module.scss";
import axios from "axios";

export const Drawer = (props) => {
    const { onClose, items = [], setCartItems, onRemove } = props;

    React.useEffect(() => {
        axios.get(
            "https://66def6e6de4426916ee31d44.mockapi.io/cart"
        ).then(response => setCartItems(response.data));
    }, []);

    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <div className={styles.header}>
                    <h2>Корзина</h2>
                    {items.length > 0 ? (
                        <div onClick={onClose} className={styles.close}>
                            <img src="/img/btn-remove.svg" alt="close" />
                        </div>) : null}
                    
                </div>
                {items.length > 0 ? (
                    <div className={styles.inconstant}>
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
                                <button onClick={() => onRemove(item.id)}>
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
                ) : (
                <div className={styles.cartEmpty}>
                    <img src="/img/cartEmpty.png" alt="Пустая корзина" />
                    <div className={styles.descr}>
                        <div>Корзина пустая</div>
                        <p>
                            Добавьте хотя бы одну пару кроссовок, чтобы сделать
                            заказ.
                        </p>
                    </div>
                    <button onClick={onClose} className={styles.back}>
                        Вернуться назад
                        <img src="/img/btn-arrowBack.svg" alt="стрелка" />
                    </button>
                </div>
                )}
            </div>
        </div>
    );
};
