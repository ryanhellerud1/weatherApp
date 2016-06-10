import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_maps';


class WeatherList extends Component{
    renderWeather(cityData){
        const cityName = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp * 9/5 -460)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidity = cityData.list.map(weather => weather.main.humidity)
        const {lon, lat} = cityData.city.coord;

        return(
            <tr key={cityName}>
                <td><GoogleMap lon={lon} lat ={lat} /> </td>
                <td>
                    <Chart data = {temps} color = "orange" units ="F" />
                </td>
                <td>
                    <Chart data = {pressures} color = "green" units="hPa"/>
                </td>
                <td>
                    <Chart data = {humidity} color = "blue" units = "%" />
                </td>
            </tr>
        )
    }

    render(){
        return (
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temp (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){ // pull weather property off state.weather, make avail to props as this.props.weather
    return {weather} // identical to weather: weather
}
export default connect(mapStateToProps)(WeatherList) //returns a container which is connected to the store/redux data