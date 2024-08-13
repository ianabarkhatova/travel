import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Partners} from "./layout/sections/partners/Partners";
import {Services} from "./layout/sections/services/Services";
import {Honeymoon} from "./layout/sections/honeymoon/Honeymoon";
import {Favourite} from "./layout/sections/favourite/Favourite";
import {Promotion} from "./layout/sections/promotion/Promotion";
import {Reviews} from "./layout/sections/reviews/Reviews";
import {Footer} from "./layout/footer/Footer";
import {Holiday} from "./layout/sections/holiday/Holiday";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Partners/>
            <Services/>
            <Honeymoon/>
            <Favourite/>
            <Holiday/>
            <Promotion/>
            <Reviews/>
            <Footer/>
            {/*<GoTopBtn/>*/}
        </div>
    );
}

export default App;

