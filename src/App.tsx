import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import DaysWeather from "./pages/DaysWeather";

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
                    to="/about"
                    className="font-medium hover:text-yellow-300 transition-colors"
                >
                    5 Days Forecasts
                </Link>

            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<DaysWeather />} />
            </Routes>
        </Router>
    );
}

export default App;
