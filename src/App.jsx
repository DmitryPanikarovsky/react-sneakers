import React from "react";
import { CardList } from "./components/CardList/CardList";
import { Drawer } from "./components/Drawer/Drawer";
import { Header } from "./components/Header/Header";
import "./styles/App.scss";

function App() {
    const [openCart, setOpenCart] = React.useState(false);

    const [cartItems, setCartItems] = React.useState([]);

    const [searchValue, setSearchValue] = React.useState("");

    const onAddToCart = (product) => {
        setCartItems((prev) => [...prev, product]);
    };

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper">
            {openCart && (
                <Drawer items={cartItems} onClose={() => setOpenCart(false)} />
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
