import CountryData from '../core/country-data';

export default class CovidDataProcessor {
  constructor() { }

  private sort(item1: number | string, item2: number | string, options: { sort: { order: string } }) {
    if (options.sort.order === "asc") {
      if (item1 > item2) {
        return 1;
      }
      return -1;
    } else {
      if (item1 < item2) {
        return 1;
      }
      return -1;
    }
  }

  getCountriesWithHigherNumberOfConfirmedCases(data: CountryData[]): string[] {
    return data
      .sort((countryData1, countryData2) => this.sort(countryData1.confirmedCases, countryData2.confirmedCases, { sort: { order: "desc" } }))
      .slice(0, 3)
      .sort((countryData1, countryData2) => this.sort(countryData1.name, countryData2.name, { sort: { order: "asc" } }))
      .map(countryData => countryData.name);
  }

  getDeathsInCountriesWithLessConfirmedCasesBetweenCountriesWithHigherNumberOfActiveCases(data: CountryData[]): number {
    return data
      .sort((countryData1, countryData2) => this.sort(countryData1.activeCases, countryData2.activeCases, { sort: { order: "desc" } }))
      .slice(0, 10)
      .sort((countryData1, countryData2) => this.sort(countryData1.confirmedCases, countryData2.confirmedCases, { sort: { order: "asc" } }))
      .slice(0, 5)
      .reduce((deaths, countryData) => deaths += countryData.deaths, 0);
  }

  getHigherNumberOfDeathsInSouthernHemisphere(data: CountryData[]): number {
    return data
      .filter((countryData) => countryData.lng < 90)
      .sort((countryData1, countryData2) => this.sort(countryData1.deaths, countryData2.deaths, { sort: { order: "desc" } }))
      .slice(0, 1)
      .map(countryData => countryData.deaths)
      .at(0);
  }

  getHigherNumberOfDeathsInNorthernHemisphere(data: CountryData[]): number {
    return data
      .filter((countryData) => countryData.lng > 90)
      .sort((countryData1, countryData2) => this.sort(countryData1.deaths, countryData2.deaths, { sort: { order: "desc" } }))
      .slice(0, 1)
      .map(countryData => countryData.deaths)
      .at(0);
  }

  getActiveCasesSumOfCountriesWithMoreThanAMillionConfirmedCases(data: CountryData[]): number {
    return data
      .filter((countryData) => countryData.confirmedCases >= 1000000)
      .reduce((activeCases, countryData) => activeCases += countryData.activeCases, 0);
  }
}