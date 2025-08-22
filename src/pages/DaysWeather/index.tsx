import React, { useEffect, useState } from "react";
import get5DaysForecasts from "../../utils/get5DaysForecasts.ts";

function CurrentLocWeather() {
    const [forecastData, setForecastData] = useState([]);
    const [selectedDay, setSelectedDay] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await get5DaysForecasts(setForecastData, setLoading, setSelectedDay);
        })();
        console.log(loading)
    }, []);

    if (loading) return <p className="text-center text-lg">Loading...</p>;

    return (
        <div className="p-6">

            <div className="flex gap-6 mb-10 overflow-x-auto px-4 py-2">
                {forecastData.map((day) => (
                    <div
                        key={day?.dt}
                        onClick={() => setSelectedDay(day)}
                        className={`cursor-pointer relative flex flex-col items-center justify-between
                        bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg 
                        p-6 w-48 min-w-[12rem] hover:scale-105 transition-transform duration-300
                        ${
                            selectedDay?.dt === day?.dt
                                ? "ring-4 ring-indigo-400"
                                : ""
                        }`}
                    >
                        <h1 className="text-lg font-semibold text-white mb-4">
                            {new Date(day?.dt_txt).toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                            })}
                        </h1>

                        <img
                            src={`https://openweathermap.org/img/wn/${day?.weather[0]?.icon}@4x.png`}
                            alt="Weather icon"
                            className="w-20 h-20 drop-shadow-xl"
                        />

                        <p className="text-3xl font-bold text-white mt-3">
                            {Math.round(day?.main.temp)}°C
                        </p>

                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-indigo-600/40 rounded-3xl -z-10" />
                    </div>
                ))}
            </div>
            {selectedDay && (
                <div className="mt-6">
                    <h2 className="text-2xl font-bold text-gray-800  mb-6">
                        Hourly Forecast
                    </h2>
                    <div className="flex gap-6 overflow-x-auto px-4">
                        {selectedDay?.items?.map((hour) => (
                            <div
                                key={hour?.dt}
                                className="flex flex-col items-center justify-center
                           bg-white/20 backdrop-blur-md border border-white/30
                           rounded-2xl shadow-lg p-4 min-w-[8rem] hover:scale-105
                           transition-transform duration-300"
                            >
                                <p className="text-sm font-semibold text-gray-800 mb-2">
                                    {new Date(hour?.dt_txt).toLocaleTimeString("en-US", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </p>

                                <img
                                    src={`https://openweathermap.org/img/wn/${hour?.weather[0]?.icon}@2x.png`}
                                    alt="Weather icon"
                                    className="w-14 h-14 drop-shadow-md"
                                />

                                <p className="text-lg font-bold text-gray-900 mt-2">
                                    {Math.round(hour?.main.temp)}°C
                                </p>

                                <p className="text-xs text-gray-700 capitalize mt-1">
                                    {hour?.weather[0]?.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CurrentLocWeather;
