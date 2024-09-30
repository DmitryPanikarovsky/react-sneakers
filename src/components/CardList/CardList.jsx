import React from "react";
import { Card } from "../Card/Card";
import styles from "./CardList.module.scss";
import axios from 'axios'

export const CardList = ({ addProduct, searchValue }) => {

    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        axios
            .get("https://66f3c9c977b5e8897096d661.mockapi.io/products")
            .then(response => setItems(response.data));
    }, [])


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
                    />
                ))}
        </div>
    );
};
