import React from "react";
import './Resault.css'

const Result = props => {
  const {
    data,
    city,
    sunrise,
    sunset,
    temp,
    pressur,
    wind,
    err
  } = props.weather;

  let content = true;

  if (!err && city) {
    
const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
const sunSetTime = new Date(sunset *1000).toLocaleTimeString()

    content = (
      <>
        <h3>
          Wyniki wyszukiwania dla <em>{city}</em>
        </h3>
        <h4>Dane dla dnia i godziny: {data}</h4>
        <h4>Aktualna temperatura: {temp} &#176; C</h4>
        <h4>Wschód słońca o: {sunriseTime}</h4>
        <h4>Zachód słońca o {sunSetTime}</h4>
    <h4>Siła wiatru: {wind} m/s</h4>
  <h4>Ciśnienie: {pressur} hPa</h4>
      </>
    );
  }

  return (
    <div className="result">
        {err ?  `Nie ma w bazie ${city}`: content}
    </div>
  );
};

export default Result;
