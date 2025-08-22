const API_KEY = "849ed8b8a6e8a20c50277e9eeac7c622";

const getFavoriteLocWeather = async (
    idsArray: string[],
    setWeather: (data: any) => void,
    setLoading: (loading: boolean) => void) => {

    setLoading(true);
    let allFetchesResults = []
    try {
        for (const id of idsArray) {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=metric`
            );

            const data = await res.json();
            allFetchesResults.push(data);
        }


        console.log(allFetchesResults);
        setWeather(allFetchesResults);
    } catch (err) {
        console.error("Fetch error:", err);
    } finally {
        setLoading(false);
    }
};

export default getFavoriteLocWeather;
