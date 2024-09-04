import "./styles/App.scss";

function App() {
    return (
        <div className="wrapper">
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
                                <img
                                    src="/img/btn-remove.svg"
                                    alt="remove"
                                />
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
                                <img
                                    src="/img/btn-remove.svg"
                                    alt="remove"
                                />
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
                        <button className='makeAn'>
                            Оформить заказ
                            <img src="/img/btn-arrow.svg" alt="стрелка" />
                        </button>
                    </div>
                </div>
            </div>
            <header className="header">
                <div className="logo">
                    <img src="/img/logo.svg" alt="Логотип" />
                    <div className="logo__title">
                        <div>React Sneakers</div>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <div className="info">
                    <a href="#" className="info__block">
                        <img
                            className="img"
                            src="/img/cart.svg"
                            alt="Иконка корзины"
                        />
                        <div>
                            1205 <span>₽</span>
                        </div>
                    </a>
                    <a href="#" className="info__block">
                        <img
                            className="img"
                            src="/img/bookmarks.svg"
                            alt="Иконка закладок"
                        />
                        <div>Закладки</div>
                    </a>
                    <a href="#" className="info__block">
                        <img
                            className="img"
                            src="/img/profile.svg"
                            alt="Иконка профиля"
                        />
                        <div>Профиль</div>
                    </a>
                </div>
            </header>
            <div className="content">
                <div className="content__header">
                    <h1>Все кроссовки</h1>
                    <div className="search">
                        <img src="/img/search.svg" alt="" />
                        <input className="input" placeholder="Поиск..." />
                    </div>
                </div>
                <ul className="cards">
                    <li className="card">
                        <div className="card__bookmarks">
                            <img src="/img/heart-liked.svg" alt="сердечко" />
                        </div>
                        <div className="card__img">
                            <img
                                src="/img/sneakers/sneakers-1.png"
                                alt="кроссовки"
                            />
                        </div>
                        <p className="card__title">
                            Мужские Кроссовки Nike Blazer Mid Suede
                        </p>
                        <div className="card__price">
                            <div>
                                <p>Цена:</p>
                                <div>
                                    12999 <span>₽</span>
                                </div>
                            </div>
                            <button>
                                <img src="/img/btn-unchecked.svg" alt="check" />
                            </button>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__bookmarks">
                            <img src="/img/heart-liked.svg" alt="сердечко" />
                        </div>
                        <div className="card__img">
                            <img
                                src="/img/sneakers/sneakers-1.png"
                                alt="кроссовки"
                            />
                        </div>
                        <p className="card__title">
                            Мужские Кроссовки Nike Blazer Mid Suede
                        </p>
                        <div className="card__price">
                            <div>
                                <p>Цена:</p>
                                <div>
                                    12999 <span>₽</span>
                                </div>
                            </div>
                            <button>
                                <img src="/img/btn-unchecked.svg" alt="check" />
                            </button>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__bookmarks">
                            <img src="/img/heart-liked.svg" alt="сердечко" />
                        </div>
                        <div className="card__img">
                            <img
                                src="/img/sneakers/sneakers-1.png"
                                alt="кроссовки"
                            />
                        </div>
                        <p className="card__title">
                            Мужские Кроссовки Nike Blazer Mid Suede
                        </p>
                        <div className="card__price">
                            <div>
                                <p>Цена:</p>
                                <div>
                                    12999 <span>₽</span>
                                </div>
                            </div>
                            <button>
                                <img src="/img/btn-unchecked.svg" alt="check" />
                            </button>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__bookmarks">
                            <img src="/img/heart-liked.svg" alt="сердечко" />
                        </div>
                        <div className="card__img">
                            <img
                                src="/img/sneakers/sneakers-1.png"
                                alt="кроссовки"
                            />
                        </div>
                        <p className="card__title">
                            Мужские Кроссовки Nike Blazer Mid Suede
                        </p>
                        <div className="card__price">
                            <div>
                                <p>Цена:</p>
                                <div>
                                    12999 <span>₽</span>
                                </div>
                            </div>
                            <button>
                                <img src="/img/btn-unchecked.svg" alt="check" />
                            </button>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__bookmarks">
                            <img src="/img/heart-liked.svg" alt="сердечко" />
                        </div>
                        <div className="card__img">
                            <img
                                src="/img/sneakers/sneakers-1.png"
                                alt="кроссовки"
                            />
                        </div>
                        <p className="card__title">
                            Мужские Кроссовки Nike Blazer Mid Suede
                        </p>
                        <div className="card__price">
                            <div>
                                <p>Цена:</p>
                                <div>
                                    12999 <span>₽</span>
                                </div>
                            </div>
                            <button>
                                <img src="/img/btn-unchecked.svg" alt="check" />
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
