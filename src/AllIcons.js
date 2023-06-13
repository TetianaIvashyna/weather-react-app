import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
// ['#514A83', '#F2BB1A', '#4C9BCD', '#514A83', '#CFCFCF'

export default function AllIcons(props) {
    const iconsArray = [
        {desc: 'clear-sky-day',icon: 'CLEAR_DAY',
  color: '#F78640'},
        {desc: 'clear-sky-night',icon: 'CLEAR_NIGHT',
  color: '#514A83'},
        {desc: 'few-clouds-day',icon: 'PARTLY_CLOUDY_DAY',
  color: 'goldenrod'},
        {desc: 'few-clouds-night',icon: 'PARTLY_CLOUDY_NIGHT',
  color: '#514A83'},
       {desc: 'scattered-clouds-day',icon: 'CLOUDY',
  color: '#7DC9F6'},
        {desc: 'scattered-clouds-night',icon: 'CLOUDY',
  color: '#514A83'},
        {desc: 'broken-clouds-day',icon: 'CLOUDY',
  color: '#c2b6d6'},
        {desc: 'broken-clouds-night',icon: 'CLOUDY',
  color: '#514A83'},
        {desc: 'shower-rain-day',icon: 'RAIN',
  color: '#cab3cc'},
        {desc: 'shower-rain-night',icon: 'RAIN',
  color: '#514A83'},
        {desc: 'rain-day',icon: 'RAIN',
  color: '#77d6ce'},
        {desc: 'rain-night',icon: 'RAIN',
  color: '#514A83'},
        {desc: 'thunderstorm-day',icon: 'RAIN',
  color: '#AAAAAA'},
        {desc: 'thunderstorm-night',icon: 'RAIN',
  color: '#514A83'},
        {desc: 'snow-day',icon: 'SNOW',
  color: '#99c3db'},
        {desc: 'snow-night',icon: 'SNOW',
  color: '#514A83'},
        {desc: 'mist-day',icon: 'FOG',
  color: '#84cdd8'},
        {desc: 'mist-night',icon: 'FOG',
  color: '#514A83'}];

  return(
  <div className="container">
    <div className="row">
        {iconsArray.map(function (item, index) {
            if (index%2 === 0) return(
            <div className="col border rounded" key={index}>
                <div className="text-center">{item.desc}</div>
                    <ReactAnimatedWeather
                        icon={item.icon}
                        color={item.color}
                        size={props.size}
                        animate={true}
                    /> 
                <div className="text-center">{item.color}</div>
            </div>);
            else return null;
        })};
    </div>
  </div>);
}

// {desc: 'few-clouds-day',icon: 'PARTLY_CLOUDY_DAY', color: '#F78640'},
// {desc: 'clear-sky-day',icon: 'CLEAR_DAY', color: '#F2BB1A'},
// 'goldenrod'
// const iconsMapping = {
//         'clear-sky-day': {icon: 'CLEAR_DAY',
//   color: '#F78640'},
//         'clear-sky-night': {icon: 'CLEAR_NIGHT',
//   color: '#514A83'},
//         'few-clouds-day': {icon: 'PARTLY_CLOUDY_DAY',
//   color: 'goldenrod'},
//         'few-clouds-night': {icon: 'PARTLY_CLOUDY_NIGHT',
//   color: '#514A83'},
//        'scattered-clouds-day': {icon: 'CLOUDY',
//   color: '#7DC9F6'},
//         'scattered-clouds-night': {icon: 'CLOUDY',
//   color: '#514A83'},
//         'broken-clouds-day': {icon: 'CLOUDY',
//   color: '#AAAAAA'},
//         'broken-clouds-night': {icon: 'CLOUDY',
//   color: '#514A83'},
//         'shower-rain-day': {icon: 'RAIN',
//   color: '#06CABB'},
//         'shower-rain-night': {icon: 'RAIN',
//   color: '#514A83'},
//         'rain-day': {icon: 'RAIN',
//   color: '#006EAF'},
//         'rain-night': {icon: 'RAIN',
//   color: '#514A83'},
//         'thunderstorm-day': {icon: 'RAIN',
//   color: '#757575'},
//         'thunderstorm-night': {icon: 'RAIN',
//   color: '#514A83'},
//         'snow-day': {icon: 'SNOW',
//   color: '#4C9BCD'},
//         'snow-night': {icon: 'SNOW',
//   color: '#514A83'},
//         'mist-day': {icon: 'FOG',
//   color: '#42919e'},
//         'mist-night': {icon: 'FOG',
//   color: '#514A83'}};
