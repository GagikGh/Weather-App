import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import FavoritePage from './pages/FavoritePage'
import DaysWeather from './pages/DaysWeather'
import getForecastsFavoriteLoc from './utils/getForecastsFavoriteLoc';


function App() {
    return (
        <Router>
            <nav className="flex items-center justify-center gap-6 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 text-white py-4 shadow-md rounded-b-2xl">
                <Link
                    to="/"
                    className="font-medium hover:text-yellow-300 transition-colors"
                >
                    Home
                </Link>
                <Link
                    to="/favorites"
                    className="font-medium hover:text-yellow-300 transition-colors"
                >
                    Favorites
                </Link>
                

            </nav>

            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/favorites" element={<FavoritePage />} />
                <Route path="/days-weather" element={<DaysWeather  func={getForecastsFavoriteLoc} args={[2643743]} />} />
            </Routes>
        </Router>
    );
}

export default App;
