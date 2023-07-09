import './App.css';
import { useState } from "react";
import { Country, State, City } from "country-state-city";
import Select from 'react-select'

// Import the script to make GET API calls
import getRecords from './requests/getRecords.js';
import postRecord from './requests/postRecord.js';

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const submit = () => {
    let location = {
      country: selectedCountry.name,
      state: selectedState.name,
      city: selectedCity.name
    }
    postRecord(location)
  }

  return (
    <div className="main">
      Welcome to React and Kintone!
      <div className="selectDiv">
        <p>Pick a Country</p>
        <Select
          options={Country.getAllCountries()}
          getOptionLabel={(options) => {
            return options["name"];
          }}
          getOptionValue={(options) => {
            return options["name"];
          }}
          value={selectedCountry}
          onChange={(item) => {
            setSelectedCountry(item);
          }}
        />
        <p>Then Pick a State</p>
        <Select
          options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
          getOptionLabel={(options) => {
            return options["name"];
          }}
          getOptionValue={(options) => {
            return options["name"];
          }}
          value={selectedState}
          onChange={(item) => {
            setSelectedState(item);
          }}
        />
        <p>Lastly, Pick a City</p>
        <Select
          options={City.getCitiesOfState(
            selectedState?.countryCode,
            selectedState?.isoCode
          )}
          getOptionLabel={(options) => {
            return options["name"];
          }}
          getOptionValue={(options) => {
            return options["name"];
          }}
          value={selectedCity}
          onChange={(item) => {
            setSelectedCity(item);
          }}
        />
      </div>
      <div className="submitDiv">
        <button onClick={submit}>
          Submit!
        </button>
      </div>
    </div>
  );
}

export default App;
