import {toast} from 'react-toastify';

export default function handlePositionError(GeolocationPositionError) {
        let mainMessage = `Can not get the weather in your current location.`;
        console.log(GeolocationPositionError);
        switch(GeolocationPositionError.code) {
            case 1: toast.error(`${mainMessage} Unable to get your position. Please, check your Permission Settings.`);
                break;
            case 3: toast.error(`${mainMessage} Can not define your position. Time of waiting response is out.`);
                break;
            case 2: toast.error(`${mainMessage} Please, check your internet connection.`);
                break;
            default: toast.error(`${mainMessage}`);
        }
        
    }