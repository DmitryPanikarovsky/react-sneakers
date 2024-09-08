import { Card } from "../Card/Card";
import { collectionProducts } from "../../products/collectionProducts";
import styles from "./CardList.module.scss";

export const CardList = () => {
    return (
        <div className={styles.CardList}>
            {collectionProducts.map((item) => (
                <Card
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    addToFavorite={() => console.log('Добавить в избранное')}
                    addToCart={() => console.log('Добавить в корзину')}
                />
            ))}
        </div>
    );
};
