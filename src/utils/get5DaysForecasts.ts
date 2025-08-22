const API_KEY = "849ed8b8a6e8a20c50277e9eeac7c622";

function filteredDays(list){
    const newArr = [];
    list.forEach((item) => {
        if(!newArr.find(newArrItem => new Date(newArrItem.dt_txt).getDate() === new Date(item.dt_txt).getDate())) {
            newArr.push(item)
            newArr[newArr.length - 1].items = []
        }
        newArr[newArr.length - 1].items.push(item);
    })
    return newArr;
}

const get5DaysForecasts = async (
    setWeather: (data: any) => void,
    setLoading: (loading: boolean) => void,
    setSelectedDay: () => void) => {

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            try {
                const { latitude, longitude } = position.coords;

                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
                );
                const data = await res.json();


                const uniqueDates = filteredDays(data.list);


                setWeather(uniqueDates);
                setSelectedDay(uniqueDates[0]);
            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);

            }
        },
        (error) => {
            console.error("Geolocation error:", error);
            setLoading(false);
        }
    );
};

export default get5DaysForecasts;
