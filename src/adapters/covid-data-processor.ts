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

  getData(data: CountryData[]): void {
    console.log("Os três países com os maiores valores de \"Confirmed\". Os nomes devem estar em ordem alfabética");
    console.log(
      data
        .sort((countryData1, countryData2) => this.sort(countryData1.confirmedCases, countryData2.confirmedCases, { sort: { order: "desc" } }))
        .slice(0, 3)
        .sort((countryData1, countryData2) => this.sort(countryData1.name, countryData2.name, { sort: { order: "asc" } }))
        .map(countryData => countryData.name)
    );

    console.log("Dentre os dez países com maiores valores de \"Active\", a soma dos \"Deaths\" dos cinco países com menores valres de \"Confirmed\"");
    console.log(
      data
        .sort((countryData1, countryData2) => this.sort(countryData1.activeCases, countryData2.activeCases, { sort: { order: "desc" } }))
        .slice(0, 10)
        .sort((countryData1, countryData2) => this.sort(countryData1.confirmedCases, countryData2.confirmedCases, { sort: { order: "asc" } }))
        .slice(0, 5)
        .reduce((deaths, countryData) => deaths += countryData.deaths, 0)
    );

    console.log("O maior valor de \"Deaths\" entre os países do hemisfério sul.");
    console.log(
      data
        .filter((countryData) => countryData.lng < 90)
        .sort((countryData1, countryData2) => this.sort(countryData1.deaths, countryData2.deaths, { sort: { order: "desc" } }))
        .slice(0, 1)
        .map(countryData => countryData.deaths)
        .at(0)
    );

    console.log("O maior valor de \"Deaths\" entre os países do hemisfério norte");
    console.log(
      data
        .filter((countryData) => countryData.lng > 90)
        .sort((countryData1, countryData2) => this.sort(countryData1.deaths, countryData2.deaths, { sort: { order: "desc" } }))
        .slice(0, 1)
        .map(countryData => countryData.deaths)
        .at(0)
    );

    console.log("A soma de \"Active\" de todos os países em que \"Confirmed\" é maior o igual que 1.000.000");
    console.log(
      data
        .filter((countryData) => countryData.confirmedCases > 1000000)
        .reduce((activeCases, countryData) => activeCases += countryData.activeCases, 0)
    );
  }
}
