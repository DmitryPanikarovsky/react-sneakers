import { Card } from "../Card/Card";
import styles from "./CardList.module.scss";

export const CardList = () => {
    return (
        <div className={styles.CardList}>
            {.map((item) => (
                <Card
                    key={item.price}
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                />
            ))}
        </div>
    );
};
