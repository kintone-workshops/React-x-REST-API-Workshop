import { Country } from "country-state-city";
import Select from 'react-select'

const CountryPicker = ({selectedCountry, setSelectedCountry}) => {
  return(
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
  );
}
export default CountryPicker;
