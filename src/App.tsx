import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Partners} from "./layout/sections/partners/Partners";
import {Services} from "./layout/sections/services/Services";
import {Honeymoon} from "./layout/sections/honeymoon/Honeymoon";
import {Favourite} from "./layout/sections/favourite/Favourite";
import {Promotion} from "./layout/sections/promotion/Promotion";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Partners/>
            <Services/>
            <Honeymoon/>
            <Favourite/>
            <Promotion/>
        </div>
    );
}

export default App;

