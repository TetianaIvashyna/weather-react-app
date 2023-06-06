import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
// ['#655E9D', '#F2BB1A', '#4C9BCD', '#514A83', '#CFCFCF'

export default function WeatherAnimatedPicture(props) {
    const iconsMapping = {
        'clear-sky-day': {icon: 'CLEAR_DAY',
  color: '#F78640'},
        'clear-sky-night': {icon: 'CLEAR_NIGHT',
  color: '#514A83'},
        'few-clouds-day': {icon: 'PARTLY_CLOUDY_DAY',
  color: 'goldenrod'},
        'few-clouds-night': {icon: 'PARTLY_CLOUDY_NIGHT',
  color: '#514A83'},
       'scattered-clouds-day': {icon: 'CLOUDY',
  color: '#7DC9F6'},
        'scattered-clouds-night': {icon: 'CLOUDY',
  color: '#514A83'},
        'broken-clouds-day': {icon: 'CLOUDY',
  color: '#AAAAAA'},
        'broken-clouds-night': {icon: 'CLOUDY',
  color: '#514A83'},
        'shower-rain-day': {icon: 'RAIN',
  color: '#06CABB'},
        'shower-rain-night': {icon: 'RAIN',
  color: '#514A83'},
        'rain-day': {icon: 'RAIN',
  color: '#006EAF'},
        'rain-night': {icon: 'RAIN',
  color: '#514A83'},
        'thunderstorm-day': {icon: 'RAIN',
  color: '#757575'},
        'thunderstorm-night': {icon: 'RAIN',
  color: '#514A83'},
        'snow-day': {icon: 'SNOW',
  color: '#4C9BCD'},
        'snow-night': {icon: 'SNOW',
  color: '#514A83'},
        'mist-day': {icon: 'FOG',
  color: '#42919e'},
        'mist-night': {icon: 'FOG',
  color: '#514A83'}};

  return(
  <div className="WeatherAnimatedPicture text-center">
    <ReactAnimatedWeather
    icon={iconsMapping[props.icon].icon}
    color={iconsMapping[props.icon].color}
    size={props.size}
    animate={true}
  />
    </div>);
}
