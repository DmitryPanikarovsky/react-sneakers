export const Drawer = () => {
    return (
        <div className="overlay">
            <div className="drawer">
                <div className="drawer__header">
                    <h2>Корзина</h2>
                    <div className="drawer__close">
                        <img src="/img/btn-remove.svg" alt="close" />
                    </div>
                </div>
                <ul className="products">
                    <li className="product">
                        <div className="product__img">
                            <img
                                src="/img/sneakers/sneakers-1.png"
                                alt="sneakers"
                            />
                        </div>
                        <div className="title-price">
                            <p className="product__title">
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </p>
                            <div>
                                12999 <span>₽</span>
                            </div>
                        </div>
                        <button>
                            <img src="/img/btn-remove.svg" alt="remove" />
                        </button>
                    </li>
                    <li className="product">
                        <div className="product__img">
                            <img
                                src="/img/sneakers/sneakers-1.png"
                                alt="sneakers"
                            />
                        </div>
                        <div className="title-price">
                            <p className="product__title">
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </p>
                            <div>
                                12999 <span>₽</span>
                            </div>
                        </div>
                        <button>
                            <img src="/img/btn-remove.svg" alt="remove" />
                        </button>
                    </li>
                </ul>
                <div className="total">
                    <ul className="totalBlock">
                        <li>
                            <p>Итого:</p>
                            <div className="dashed"></div>
                            <div>
                                21 498 <span>₽</span>
                            </div>
                        </li>
                        <li>
                            <p>Налог 5%:</p>
                            <div className="dashed"></div>
                            <div>
                                1074 <span>₽</span>
                            </div>
                        </li>
                    </ul>
                    <button className="makeAn">
                        Оформить заказ
                        <img src="/img/btn-arrow.svg" alt="стрелка" />
                    </button>
                </div>
            </div>
        </div>
    );
};