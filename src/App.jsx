import "./styles/App.scss";

function App() {
    return (
        <div className="wrapper">
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
					<input className='input' placeholder='Поиск...'/>
				</div>
                <ul className="cards">
                    <li className="card">
						<div className="card__bookmarks">
							<img src="/img/bookmarks-light.svg" alt="сердечко" />
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
                                <img src="/img/plus.svg" alt="plus" />
                            </button>
                        </div>
                    </li>
                    <li className="card">
						<div className="card__bookmarks">
							<img src="/img/bookmarks-light.svg" alt="сердечко" />
						</div>
                        <div className="card__img">
                            <img
                                src="/img/sneakers/sneakers-2.png"
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
                                <img src="/img/plus.svg" alt="plus" />
                            </button>
                        </div>
                    </li>
                    <li className="card">
						<div className="card__bookmarks">
							<img src="/img/bookmarks-light.svg" alt="сердечко" />
						</div>
                        <div className="card__img">
                            <img
                                src="/img/sneakers/sneakers-3.png"
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
                                <img src="/img/plus.svg" alt="plus" />
                            </button>
                        </div>
                    </li>
                    <li className="card">
						<div className="card__bookmarks">
							<img src="/img/bookmarks-light.svg" alt="сердечко" />
						</div>
                        <div className="card__img">
                            <img
                                src="/img/sneakers/sneakers-4.png"
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
                                <img src="/img/plus.svg" alt="plus" />
                            </button>
                        </div>
                    </li>
                    <li className="card">
						<div className="card__bookmarks">
							<img src="/img/bookmarks-light.svg" alt="сердечко" />
						</div>
                        <div className="card__img">
                            <img
                                src="/img/sneakers/sneakers-5.png"
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
                                <img src="/img/plus.svg" alt="plus" />
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
