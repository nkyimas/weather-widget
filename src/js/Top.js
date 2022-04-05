import { useEffect, useState } from 'react'
import { openweathermap_API } from './consts'
import { useTranslation } from 'react-i18next'

const Top = (props) => {
  const { t, i18n } = useTranslation()
  var d = new Date()

  return (
    <div className="part-weather-top">
      <form
        action="#"
        onSubmit={(event) => {
          event.preventDefault()
          props.updateLocation(event.target[0].value)
        }}
        className="form-city"
      >
        <input type="text" className="form-input" placeholder={t('searchTitle')} />
      </form>
      <h1>{props.location}</h1>
      <span className="part-time">{d.toLocaleTimeString()}</span>
    </div>
  )
}
export default Top
