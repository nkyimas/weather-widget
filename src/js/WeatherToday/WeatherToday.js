import { useEffect, useState } from 'react'
import { openweathermap_API } from '../consts'

const WeatherToday = (props) => {
  return (
    <div className="part-weather-today">
      <div className="part-image">
        <img
          src={'https://openweathermap.org/img/wn/' + props.weatherData.weather[0].icon + '@4x.png'}
          alt="icon"
          width="200"
          height="200"
          loading="lazy"
        />
      </div>
      <span className="part-temp">
        {Math.round(props.weatherData.main.temp)}
        <sup>o</sup>C
      </span>
      <span className="part-description">{props.weatherData.weather[0].description}</span>
    </div>
  )
}
export default WeatherToday
