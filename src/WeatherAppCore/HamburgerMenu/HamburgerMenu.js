import MyCities from "./MyCities/MyCities";
import TemperatureUnits from "./TemperatureUnits/TemperatureUnits";
import NavbarToggler from "./NavbarToggler/NavbarToggler";
import SearchCityForm from "./SearchCityForm/SearchCityForm";

const HamburgerMenu = (message, setWeather, setIsCelsius, inputText, setInputText) => {
    return (
        <div className="HamburgerMenu">
            <nav className="navbar navbar-expand-md bg-light">
                <div className="container-fluid">
                <h3>{message}</h3>
                <NavbarToggler />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-3 mb-2 mb-lg-0 text-end">
                    <li className="nav-item dropdown">
                        <MyCities setWeather={setWeather } />
                    </li>
                    <li className="nav-item dropdown">
                        <TemperatureUnits setIsCelsius={setIsCelsius} />
                    </li>
                    </ul>
                    <SearchCityForm 
                    setInputText={setInputText} 
                    setWeather={setWeather} 
                    inputText={inputText} 
                    />
                </div>
                </div>
            </nav>
        </div>
    );
};

export default HamburgerMenu;