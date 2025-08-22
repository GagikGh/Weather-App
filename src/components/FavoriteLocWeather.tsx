import React, { useEffect, useState } from "react";
import getFavoriteLocWeather from "../utils/getFavoriteLocWeather";

const favoriteLocs = ["2643743", "5128581"];

function FavoriteLocWeather() {
    const [favoriteLocData, setFavoriteLocData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getFavoriteLocWeather(favoriteLocs, setFavoriteLocData, setLoading)
    },[])
    console.log("favoriteLocData", favoriteLocData);

    return (
        <div className="flex gap-4">
            {favoriteLocData.map((loc: any, index: number) => {
                    return (
                            <div
                                key={loc?.id}
                                className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-sky-400 to-indigo-500 text-white rounded-2xl m-4 shadow-xl p-6 w-80"
                            >
                                <h1 className="text-xl font-semibold mb-2">Weather for {loc?.name}</h1>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={`https://openweathermap.org/img/wn/${loc?.weather[0]?.icon}@2x.png`}
                                        alt="Weather icon"
                                        className="w-20 h-20 drop-shadow-lg"
                                    />
                                    <p className="text-5xl font-bold">{Math.round(loc?.main.temp)}°C</p>
                                </div>
                                <p className="capitalize text-lg mt-2">{loc?.weather[0].description}</p>
                                <div className="flex justify-between w-full mt-4 text-sm">
                                    <p>Humidity: {loc?.main.humidity}%</p>
                                    <p>Wind: {loc?.wind.speed} m/s</p>
                                </div>
                            </div>
                    )
            })}
        </div>

    );
}

export default FavoriteLocWeather;
