export const Card = (props) => {

    const {title, price, imageUrl} = props;

    return (
        <div className="card">
            <div className="card__bookmarks">
                <img src="/img/heart-unliked.svg" alt="сердечко" />
            </div>
            <div className="card__img">
                <img src={imageUrl} alt="кроссовки" />
            </div>
            <p className="card__title">
                {title}
            </p>
            <div className="card__price">
                <div>
                    <p>Цена:</p>
                    <div>
                        {price} <span>₽</span>
                    </div>
                </div>
                <button>
                    <img src="/img/btn-unchecked.svg" alt="check" />
                </button>
            </div>
        </div>
    );
};
