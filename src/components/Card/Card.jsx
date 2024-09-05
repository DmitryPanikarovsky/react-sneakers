export const Card = () => {
    return (
        <div className="card">
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
        </div>
    );
};