import { City } from "country-state-city";
import Select from 'react-select'


const CityPicker = ({selectedState, selectedCity, setSelectedCity}) => {
  return(
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
  );
}
export default CityPicker;
