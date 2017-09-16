import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    const {lon, lat} = cityData.city.coord;
    return(
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat}/>
        </td>
        <td>
          <Chart data={temps} color="red" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> city </th>
            <th> temp </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProp({weather}){
  return { weather };
}
// function mapStateToProp(state){
//   return { weather: state.weather };
// }

export default connect(mapStateToProp)(WeatherList);