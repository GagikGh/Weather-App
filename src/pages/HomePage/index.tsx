import React, {useState} from 'react';
import CurrentLocWeather from "../../components/CurrentLocWeather.tsx";
import FavoriteLocWeather from "../../components/FavoriteLocWeather.tsx";

const tabs = [
    {label: "My Current Location", value: "current", component: <CurrentLocWeather key="current"/>},
    {label: "My Favorite Locations", value: "favorite", component: <FavoriteLocWeather key="favorite"/>},
]

function Index() {
    const [selectedTab, setSelectedTab] = useState(tabs[0].value);
    return (
        <div className="max-w-5xl mx-auto mt-10 p-5 flex flex-col gap-6">
            <div className="flex border-b border-gray-300">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedTab(tab.value)}
                        className={`px-6 py-3 font-semibold text-lg transition-colors ${
                            selectedTab === tab.value
                                ? "border-b-4 border-blue-600 text-blue-600"
                                : "text-gray-500 hover:text-blue-500"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            {tabs.map((tab) => (selectedTab === tab.value) && tab.component)}
        </div>

    );
}

export default Index;
