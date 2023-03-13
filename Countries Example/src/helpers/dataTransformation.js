export function fromServerCountryToSiteCountry(country){
     return {
        name:country.name.common, 
        img:country.flags.png
     };
}