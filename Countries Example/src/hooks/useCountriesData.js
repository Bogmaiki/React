import { useState } from "react";
import { useRunOnce } from "./useRunOnce";

export function useCountriesData() {
  
  const [countries, setCountries] = useState([]);

  useRunOnce(() => {
    const endPointUrl = "https://restcountries.com/v3.1/all";
    fetch(endPointUrl)
      .then(response => response.json())
      .then(
        dataOfCountries => setCountries(dataOfCountries)
      );
  });

  return countries;
}
