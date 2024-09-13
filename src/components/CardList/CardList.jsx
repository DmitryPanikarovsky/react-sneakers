import React from "react";
import { Card } from "../Card/Card";
import styles from "./CardList.module.scss";
import axios from "axios";

export const CardList = ({ addProduct, searchValue }) => {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        axios
            .get("https://66def6e6de4426916ee31d44.mockapi.io/items")
            .then((response) => setItems(response.data));
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
