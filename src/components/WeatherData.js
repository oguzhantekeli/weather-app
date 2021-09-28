const WeatherData=(props)=>{
    const {weatherData} = props;

    if(!weatherData){return <p>Loading..</p>}

    return (
        <div>
            <h3>Weather Info For {weatherData.name}</h3>
            <p>Weather looks like: { weatherData.weather.map((data)=>data.description).join(', ') }</p>
            <p>Temperature : {weatherData.main.temp} Celcius</p>
            <p>Date: {new Date(weatherData.dt * 1000).toLocaleDateString()}</p>
        </div>
    )
}

export default WeatherData;