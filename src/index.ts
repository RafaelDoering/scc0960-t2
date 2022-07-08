import CovidDataMapper from "./adapters/covid-data-mapper";
import CovidDataProcessor from "./adapters/covid-data-processor";
import CsvFile from "./adapters/csv-file";

const csvFile = new CsvFile();

const covidDataMapper = new CovidDataMapper();

async function run() {
  const fileData = await csvFile.read("./files/06-16-2022.csv");

  const data = await covidDataMapper.map(fileData);

  const covidDataProcessor = new CovidDataProcessor();
  covidDataProcessor.getData(data);
}

run();
