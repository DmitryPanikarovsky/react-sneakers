import { Card } from "../Card/Card";
import { collectionProducts } from "../../products/collectionProducts";

export const CardList = () => {
    return (
        <div className="cards">
            {collectionProducts.map((item) => (
                <Card title={item.title} price={item.price} imageUrl={item.imageUrl}/>
            ))}
        </div>
    );
};
