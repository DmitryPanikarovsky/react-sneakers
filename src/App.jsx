import React from "react";
import { CardList } from "./components/CardList/CardList";
import { Drawer } from "./components/Drawer/Drawer";
import { Header } from "./components/Header/Header";
import "./styles/App.scss";
import axios from "axios";

function App() {
    const [openCart, setOpenCart] = React.useState(false);

    const [cartItems, setCartItems] = React.useState([]);

    const [searchValue, setSearchValue] = React.useState("");

    const onAddToCart = (product) => {
        axios.post("https://66def6e6de4426916ee31d44.mockapi.io/cart", product);
        setCartItems((prev) => [...prev, product]);
    };

    const onRemoveProductCart = (id) => {
        axios.delete(`https://66def6e6de4426916ee31d44.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper">
            {openCart && (
                <Drawer
                    setCartItems={setCartItems}
                    items={cartItems}
                    onClose={() => setOpenCart(false)}
                    onRemove={onRemoveProductCart}
                />
            )}
            <Header items={cartItems} onClickCart={() => setOpenCart(true)} />
            <div className="content">
                <div className="content__header">
                    <h1>
                        {searchValue
                            ? `Поиск по запросу: "${searchValue}"`
                            : "Все кроссовки"}
                    </h1>
                    <div className="search">
                        <img src="/img/search.svg" alt="Поиск" />
                        <input
                            onChange={onChangeSearchValue}
                            className="input"
                            placeholder="Поиск..."
                            value={searchValue}
                        />
                        {searchValue && (
                            <div
                                onClick={() => setSearchValue("")}
                                className="clear"
                            >
                                <img src="/img/btn-remove.svg" alt="clear" />
                            </div>
                        )}
                    </div>
                </div>
                <CardList addProduct={onAddToCart} searchValue={searchValue} />
            </div>
        </div>
    );
}

export default App;
