import CovidDataMapper from "./adapters/covid-data-mapper";
import CovidDataProcessor from "./adapters/covid-data-processor";
import CsvFile from "./adapters/csv-file";
import PromptsInput from "./adapters/prompts-input";
import ReadInput from "./adapters/read-input";

const proptsAdapter = new PromptsInput();
const readInput = new ReadInput(proptsAdapter);
const csvFile = new CsvFile();
const covidDataMapper = new CovidDataMapper();

async function run() {
  const filePath = await readInput.readInput();

  const fileData = await csvFile.read(filePath);

  const data = await covidDataMapper.map(fileData);

  const covidDataProcessor = new CovidDataProcessor();

  console.log("Os três países com mais casos confirmados em ordem alfabética");
  console.log(covidDataProcessor.getCountriesWithHigherNumberOfConfirmedCases(data).join(", "));

  console.log("Dentre os dez países com mais casos ativos, a soma dos mortes dos cinco países com menos casos confirmados");
  console.log(covidDataProcessor.getDeathsInCountriesWithLessConfirmedCasesBetweenCountriesWithHigherNumberOfActiveCases(data));

  console.log("O maior número de mortes entre os países do hemisfério sul");
  console.log(covidDataProcessor.getHigherNumberOfDeathsInSouthernHemisphere(data));

  console.log("O maior número de mortes entre os países do hemisfério norte");
  console.log(covidDataProcessor.getHigherNumberOfDeathsInNorthernHemisphere(data));

  console.log("A soma de casos ativos de todos os países em que tem 1.000.000 ou mais de casos confirmados");
  console.log(covidDataProcessor.getActiveCasesSumOfCountriesWithMoreThanAMillionConfirmedCases(data));
}

run();
