import React, { useEffect, useState } from "react";
import getFavoriteLocWeather from "../utils/getFavoriteLocWeather";
import getForecastsFavoriteLoc from "../utils/getForecastsFavoriteLoc";
import DaysWeather from "../pages/DaysWeather/index"
import { useNavigate } from "react-router-dom";

const favoriteLocs = ["2643743", "5128581"];

function FavoriteLocWeather() {
    // const [selectedLoc,setSelectedLoc] = useState(null)
    const [favoriteLocData, setFavoriteLocData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        getFavoriteLocWeather(favoriteLocs, setFavoriteLocData, setLoading)
    },[])
    
    
   

    return (
        <div className="flex gap-4">
            {favoriteLocData.map((loc: any, index: number) => {
                    return (
                            <div
                                key={loc?.id}
                                className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-sky-400 to-indigo-500 text-white rounded-2xl m-4 shadow-xl p-6 w-80"
                                onClick={() => navigate("/days-weather")}
                            >
                                <h1 className="text-xl font-semibold mb-2">Weather for {loc?.name}</h1>
                            </div>
                    )
            })}

            {/* {selectedLoc && <DaysWeather args={[selectedLoc]} />} */}
        </div>

    );
}

export default FavoriteLocWeather;
