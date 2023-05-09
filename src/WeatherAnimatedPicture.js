import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
// ['#655E9D', '#F2BB1A', '#4C9BCD', '#514A83', '#CFCFCF'

export default function WeatherAnimatedPicture(props) {
    const iconsMapping = {
        'clear-sky-day': {icon: 'CLEAR_DAY',
  color: '#F2BB1A'},
        'clear-sky-night':{icon: 'CLEAR_NIGHT',
  color: '#655E9D'},
        'few-clouds-day':{icon: 'PARTLY_CLOUDY_DAY',
  color: '#F2BB1A'},
        'few-clouds-night':{icon: 'PARTLY_CLOUDY_NIGHT',
  color: '#655E9D'},
        'scattered-clouds-day':{icon: 'CLOUDY',
  color: '#4C9BCD'},
        'scattered-clouds-night':{icon: 'CLOUDY',
  color: '#655E9D'},
        'broken-clouds-day':{icon: 'CLOUDY',
  color: '#CFCFCF'},
        'broken-clouds-night':{icon: 'CLOUDY',
  color: '#655E9D'},
        'shower-rain-day':{icon: 'RAIN',
  color: '#514A83'},
        'shower-rain-night':{icon: 'RAIN',
  color: '#655E9D'},
        'rain-day':{icon: 'RAIN',
  color: '#514A83'},
        'rain-night':{icon: 'RAIN',
  color: '#655E9D'},
        'thunderstorm-day':{icon: 'RAIN',
  color: '#514A83'},
        'thunderstorm-night':{icon: 'RAIN',
  color: '#655E9D'},
        'snow-day':{icon: 'SNOW',
  color: '#514A83'},
        'snow-night':{icon: 'SNOW',
  color: '#655E9D'},
        'mist-day':{icon: 'FOG',
  color: '#514A83'},
        'mist-night':{icon: 'FOG',
  color: '#655E9D'}};

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
