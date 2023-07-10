import { State } from "country-state-city";
import Select from 'react-select'


const StatePicker = ({selectedCountry, selectedState, setSelectedState}) => {
  return(
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
  );
}
export default StatePicker;
