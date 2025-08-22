import React, {useEffect, useState} from 'react';
import getCurrentLocWeather from "../utils/getCurrentLocWeather.ts";

function CurrentLocWeather() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCurrentLocWeather(setWeatherData, setLoading);
    }, []);

    if (loading) return <p>Loading...</p>;
    return (
        <>
            {weatherData ? (
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-sky-400 to-indigo-500 text-white rounded-2xl m-10 shadow-xl p-6 w-80 ">
                    <h1 className="text-xl font-semibold mb-2">Weather for your location</h1>
                    <p className="text-lg font-medium mb-4">{weatherData?.name}</p>
                    <div className="flex items-center gap-4">
                        <img
                            src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
                            alt="Weather icon"
                            className="w-20 h-20 drop-shadow-lg"
                        />
                        <p className="text-5xl font-bold">{Math.round(weatherData?.main.temp)}°C</p>
                    </div>
                    <p className="capitalize text-lg mt-2">
                        {weatherData?.weather[0].description}
                    </p>
                    <div className="flex justify-between w-full mt-4 text-sm">
                        <p>Humidity: {weatherData?.main.humidity}%</p>
                        <p>Wind: {weatherData?.wind.speed} m/s</p>
                    </div>
                </div>
            ) : (
                <p className="text-center text-red-600">Could not get weather data.</p>
            )}
        </>
    )
}

export default CurrentLocWeather;
