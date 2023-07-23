import { useState } from 'react';

export const [isCelsius, setIsCelsius] = useState(true);
export const [weather, setWeather] = useState({ city: '', message: '', ready: false });
export const [inputText, setInputText] = useState('');
