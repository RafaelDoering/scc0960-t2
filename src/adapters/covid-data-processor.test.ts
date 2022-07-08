import CountryData from "../core/country-data"
import CovidDataProcessor from "./covid-data-processor";

const countriesData: CountryData[] = [
  {
    name: "Country0",
    lat: 0,
    lng: 80,
    confirmedCases: 1234567,
    activeCases: 12345,
    deaths: 123456,
  }, {
    name: "Country1",
    lat: 0,
    lng: 85,
    confirmedCases: 7654321,
    activeCases: 54321,
    deaths: 654321,
  }, {
    name: "Country2",
    lat: 0,
    lng: 91,
    confirmedCases: 1000000,
    activeCases: 10000,
    deaths: 100000,
  }, {
    name: "Country3",
    lat: 0,
    lng: 92,
    confirmedCases: 10000000,
    activeCases: 100000,
    deaths: 1000000,
  },
]

const covidDataProcessor = new CovidDataProcessor();

test('Get countries with higher number of confirmed cases', async () => {
  const result = await covidDataProcessor.getCountriesWithHigherNumberOfConfirmedCases(countriesData);

  expect(result).toStrictEqual(["Country0", "Country1", "Country3"]);
});

test('Get deaths in countries with less confirmed cases between countries with higher number of active cases', async () => {
  const result = await covidDataProcessor.getDeathsInCountriesWithLessConfirmedCasesBetweenCountriesWithHigherNumberOfActiveCases(countriesData);

  expect(result).toBe(1877777);
});

test('Get higher number of deaths in southern hemisphere', async () => {
  const result = await covidDataProcessor.getHigherNumberOfDeathsInSouthernHemisphere(countriesData);

  expect(result).toBe(654321);
});

test('Get higher number of deaths in northern hemisphere', async () => {
  const result = await covidDataProcessor.getHigherNumberOfDeathsInNorthernHemisphere(countriesData);

  expect(result).toBe(1000000);
});

test('Get active cases sum of countries with more than a million confirmed cases', async () => {
  const result = await covidDataProcessor.getActiveCasesSumOfCountriesWithMoreThanAMillionConfirmedCases(countriesData);

  expect(result).toBe(176666);
});
