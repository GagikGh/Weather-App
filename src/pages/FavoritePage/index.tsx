import FavoriteLocWeather from "../../components/FavoriteLocWeather.tsx";


function Index() {
   
    return (
        <div className="max-w-5xl mx-auto mt-10 p-5 flex flex-col gap-6">
            <div className="flex ">
                <FavoriteLocWeather />
                
            </div>
            
        </div>

    );
}

export default Index;
