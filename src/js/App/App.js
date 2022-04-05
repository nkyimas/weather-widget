import WeatherToday from '../WeatherToday/WeatherToday'
import Top from '../Top'
import { Suspense, useEffect, useState } from 'react'
import { openweathermap_API, language, defaultLocation } from '../consts'

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [location, setLocation] = useState(defaultLocation)

  useEffect(async () => {
    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${openweathermap_API}&units=metric&lang=${language}`,
      {
        method: 'GET',
      }
    )
    const data = await request.json()
    //console.log(data)
    setWeatherData(data)
  }, [location])

  const updateLocation = (location) => {
    setLocation(location)
  }

  return (
    <div className="widget-weather">
      <Suspense fallback="loading...">
        <Top location={weatherData ? weatherData.name : ''} updateLocation={updateLocation} />
      </Suspense>
      {weatherData && <WeatherToday weatherData={weatherData} />}
    </div>
  )
}
export default App
