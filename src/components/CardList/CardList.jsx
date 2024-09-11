import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import styles from "./CardList.module.scss";

export const CardList = ({ addProduct, searchValue }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://66def6e6de4426916ee31d44.mockapi.io/items")
                .then((response) => response.json())
                .then((json) => setItems(json));
        }, 1500);
    }, []);

    return (
        <div className={styles.CardList}>
            {items
                .filter((item) =>
                    item.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        onPlus={(product) => addProduct(product)}
                        onFavorite={() => console.log("Добавили в избранное")}
                    />
                ))}
        </div>
    );
};
