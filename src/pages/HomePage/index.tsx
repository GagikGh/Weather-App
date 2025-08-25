import CurrentLocWeather from "../../components/CurrentLocWeather.tsx";
import DaysWeather from '../DaysWeather'
import getForecastsCurrentLoc from "../../utils/getForecastsCurrentLoc.ts";


function Index() {
    return (
        <>
            <div className="max-w-5xl mx-auto mt-10 p-5 flex flex-col gap-6 border-b border-gray-300">
                
                    <CurrentLocWeather />
            </div>
            <DaysWeather func={getForecastsCurrentLoc} args={[]}/>
        </>
        

    );
}

export default Index;
