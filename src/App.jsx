import { useState } from "react";
import { CardList } from "./components/CardList/CardList";
import { Drawer } from "./components/Drawer/Drawer";
import { Header } from "./components/Header/Header";
import "./styles/App.scss";

function App() {
    const [openCart, setOpenCart] = useState(false);

    const [cartItems, setCartItems] = useState([]);

    const onAddToCart = (product) => {
        setCartItems((prev) => [...prev, product]);
    };

    return (
        <div className="wrapper">
            {openCart && (
                <Drawer items={cartItems} onClose={() => setOpenCart(false)} />
            )}
            <Header items={cartItems} onClickCart={() => setOpenCart(true)} />
            <div className="content">
                <div className="content__header">
                    <h1>Все кроссовки</h1>
                    <div className="search">
                        <img src="/img/search.svg" alt="Поиск" />
                        <input className="input" placeholder="Поиск..." />
                    </div>
                </div>
                <CardList addProduct={onAddToCart} />
            </div>
        </div>
    );
}

export default App;
