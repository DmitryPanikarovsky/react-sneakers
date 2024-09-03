import "./styles/App.scss";

function App() {
    return (
        <div className="wrapper">
            <header className="header">
                <div className="logo">
                    <img src="/logo.svg" alt="Логотип" />
                    <div className="logo__title">
                        <div>ReactSneakers</div>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <div className="info">
                    <a href="" className="info__block">
                        <img
                            className="img"
                            src="/cart.svg"
                            alt="Иконка корзины"
                        />
                        <div>
                            1205 <span>₽</span>
                        </div>
                    </a>
                    <a href="" className="info__block">
                        <img
                            className="img"
                            src="/bookmarks.svg"
                            alt="Иконка закладок"
                        />
                        <div>Закладки</div>
                    </a>
                    <a href="" className="info__block">
                        <img
                            className="img"
                            src="/profile.svg"
                            alt="Иконка профиля"
                        />
                        <div>Профиль</div>
                    </a>
                </div>
            </header>
            <div className="content">
                <h1>Все кроссовки</h1>
                .......
            </div>
        </div>
    );
}

export default App;
