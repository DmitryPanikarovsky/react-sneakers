import { useState } from 'react'
import { CardList } from './components/CardList/CardList'
import { Drawer } from "./components/Drawer/Drawer";
import { Header } from "./components/Header/Header";
import "./styles/App.scss";

function App() {
    const [openCart, setOpenCart] = useState(true);

    return (
        <div className="wrapper">
            {openCart ? <Drawer /> : null}
            <Header />
            <div className="content">
                <div className="content__header">
                    <h1>Все кроссовки</h1>
                    <div className="search">
                        <img src="/img/search.svg" alt="" />
                        <input className="input" placeholder="Поиск..." />
                    </div>
                </div>
                <CardList/>
            </div>
        </div>
    );
}

export default App;
