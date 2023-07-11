import './App.css';
import { useState } from "react";
import LoadingSpinner from './components/spinner.js'
import CountryPicker from './components/countryPicker.js'
import StatePicker from './components/statePicker.js'
import CityPicker from './components/cityPicker.js'

// Import the functions to make API calls
import getRecords from './requests/getRecords.js';
import postRecord from './requests/postRecord.js';

function App() {
  // Our hooks for data and setting that data.
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [records, setRecords] = useState([]);

  // Submit button's onclick function. Calls POST request
  const submit = async () => {
    setLoading(true);
    let location = {
      country: selectedCountry.name,
      state: selectedState.name,
      city: selectedCity.name
    }
    console.log(selectedCountry)
    if (selectedCountry === "") {
      alert("At least pick a country...")
    } else {
      let response = await postRecord(location);
      console.log(response)
    }
    setLoading(false);
  }

  // Get button's onClick function. Calls GET API request.
  const get = async () => {
    setLoading(true);
    let response = await getRecords();
    let locationArray = [];
    response.records.forEach((record, index) => {
      locationArray.push(<li key={index}>{record.country.value}, {record.state.value}, {record.city.value}</li>)
    });
    setRecords(locationArray);
    setLoading(false);
  }

  // Our react JSX.
  return (
    <div className="main">
      <h2>I Use Kintone!</h2>
      {/* If loading is true, show a spinner, otherwise show nothing. */}
      {loading ? (
        <div className="loadingDiv">
          <LoadingSpinner />
        </div>
      ) : null}
      Welcome to React and Kintone!
      <div className="selectDiv">
        <p>Pick a Country</p>
        <CountryPicker selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>
        <p>Then Pick a State</p>
        <StatePicker selectedCountry={selectedCountry} selectedState={selectedState} setSelectedState={setSelectedState}/>
        <p>Lastly, Pick a City</p>
        <CityPicker selectedState={selectedState} selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
      </div>
      <div className="submitDiv">
        <button onClick={submit} disabled={loading ? true : false}>
          Submit!
        </button>
        <button onClick={get} disabled={loading ? true : false}>
          Get!
        </button>
      </div>
      <div className="listRecordsDiv">
        <ul>{records}</ul>
      </div>
    </div>
  );
}

export default App;
