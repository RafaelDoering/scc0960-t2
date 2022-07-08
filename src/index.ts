import CovidDataMapper from "./adapters/covid-data-mapper";
import CovidDataProcessor from "./adapters/covid-data-processor";
import CsvFile from "./adapters/csv-file";

const csvFile = new CsvFile();

const covidDataMapper = new CovidDataMapper();

async function run() {
  const fileData = await csvFile.read("./files/06-16-2022.csv");

  const data = await covidDataMapper.map(fileData);

  const covidDataProcessor = new CovidDataProcessor();

  console.log("Os três países com os maiores valores de \"Confirmed\". Os nomes devem estar em ordem alfabética");
  console.log(covidDataProcessor.getGreatestConfirmedCountries(data).join(", "));

  console.log("Dentre os dez países com maiores valores de \"Active\", a soma dos \"Deaths\" dos cinco países com menores valores de \"Confirmed\"");
  console.log(covidDataProcessor.getDeathsFromCountriesWithLessConfirmedInGreatestActive(data));

  console.log("O maior valor de \"Deaths\" entre os países do hemisfério sul.");
  console.log(covidDataProcessor.getGreatestDeathsInSouthernHemisphere(data));

  console.log("O maior valor de \"Deaths\" entre os países do hemisfério norte");
  console.log(covidDataProcessor.getGreatestDeathsInNorthernHemisphere(data));

  console.log("A soma de \"Active\" de todos os países em que \"Confirmed\" é maior o igual que 1.000.000");
  console.log(covidDataProcessor.getActiveCasesSumOfCountriesWithMoreThanAMillionConfirmedCases(data));
}

run();
