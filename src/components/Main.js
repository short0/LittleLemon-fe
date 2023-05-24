import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import MenuPage from "./MenuPage"
import ReservationsPage from "./ReservationsPage"
import OrderOnlinePage from "./OrderOnlinePage"
import LoginPage from "./LoginPage"

const Main = () => {
    return (
        <main>
            <Routes> 
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/menu" element={<MenuPage />}></Route>
                <Route path="/reservations" element={<ReservationsPage />}></Route>
                <Route path="/order-online" element={<OrderOnlinePage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
        </main>
    )
};

export default Main;