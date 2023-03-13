import { fromServerCountryToSiteCountry } from "../helpers/dataTransformation";
import { Country } from "./Country";

export function Countries(props){
    return props.dataOfCountries.map( (country)=>{
       const fixedCountry=  fromServerCountryToSiteCountry(country);
        return <Country 
                name={fixedCountry.name} 
                img={fixedCountry.img}>
        </Country> ;
    }  );
}
