import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Form from "./Form";
import Result from "./Result";

const APIKey = "14bdc19b32cf1ad7133e34e9d2e668a0"; // Klucz do api

class App extends React.Component {
  state = {
    value: "",
    data: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleCitySubmit = e => {
    e.preventDefault();
    // console.log("ok");
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error();
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString();
        this.setState(prevState => ({
          err: false,
          data: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: Math.floor(data.main.temp),
          pressur: data.main.pressure,
          wind: data.wind.speed,
          city: prevState.value
        }));
      })
      .catch(err => {
        this.setState(state => ({
          err: true,
          city: state.value
        }));
      });
  };

  render() {
    return (
      <div className="App">
        <Form
          change={this.handleInputChange}
          value={this.state.value}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
