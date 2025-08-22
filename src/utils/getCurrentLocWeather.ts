const API_KEY = "849ed8b8a6e8a20c50277e9eeac7c622";

const getCurrentLocWeather = async (
    setWeather: (data: any) => void,
    setLoading: (loading: boolean) => void
) => {
    setLoading(true);

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            try {
                const { latitude, longitude } = position.coords;

                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
                );
                const data = await res.json();

                console.log(data);
                setWeather(data);
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

export default getCurrentLocWeather;
