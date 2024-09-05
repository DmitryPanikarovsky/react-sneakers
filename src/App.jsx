import { Card } from './components/Card/Card';
import { Drawer } from './components/Drawer/Drawer'
import { Header } from './components/Header/Header';
import "./styles/App.scss";

function App() {
    return (
        <div className="wrapper">
            <Drawer/>
            <Header/>
            <div className="content">
                <div className="content__header">
                    <h1>Все кроссовки</h1>
                    <div className="search">
                        <img src="/img/search.svg" alt="" />
                        <input className="input" placeholder="Поиск..." />
                    </div>
                </div>
                <ul className="cards">
                    <Card/>               
                    <Card/>               
                    <Card/>               
                    <Card/>               
                    <Card/>               
                    <Card/>               
                    <Card/>               
                    <Card/>               
                    <Card/>               
                </ul>
            </div>
        </div>
    );
}

export default App;
