import CountryData from '../core/country-data';

export default class CovidDataMapper {
  constructor() { }

  map(data: any[]): CountryData[] {
    const records: CountryData[] = data.map((countryData) => {
      return {
        name: countryData.Country_Region,
        lat: parseFloat(countryData.Lat),
        lng: parseFloat(countryData.Long_),
        confirmedCases: parseInt(countryData.Confirmed) || 0,
        activeCases: parseInt(countryData.Active) || 0,
        deaths: parseInt(countryData.Deaths) || 0,
      };
    }).reduce((countriesData: CountryData[], countryData) => {
      const existingCountryData: CountryData = countriesData.find((item) => {
        return item.name === countryData.name;
      });

      if (existingCountryData) {
        existingCountryData.activeCases += countryData.activeCases;
        existingCountryData.confirmedCases += countryData.confirmedCases;
        existingCountryData.deaths += countryData.deaths;
      } else {
        countriesData.push(countryData);
      }

      return countriesData;
    }, []);

    return records;
  }
}