import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { render } from 'react-dom';
import { Alert } from 'react-native';
import axios from "axios";
import Weather from "./weather";

const API_KEY = "13f52a68fad52ea24a83e199bbb5248f";

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const {data} = await axios.get(url);
    console.log(data);
    this.setState({isLoading: false, temp: data.main.temp});
  }
  getLocation = async() =>{
    try{
      await Location.requestPermissionsAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
    }
    catch (error){
      Alert.alert("Can't Find You.")
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp} = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)}/>;
  }
}
