import CsvFile from "./csv-file";

const csvFile = new CsvFile();

const filePath = "./src/adapters/csv-file.test.csv";

const testData = [
  { 'key 1': 'value 1.1', 'key 2': 'value 1.2' },
  { 'key 1': 'value 2.1', 'key 2': 'value 2.2' },
];

test('read csv', async () => {
  const result = await csvFile.read(filePath);

  expect(result).toStrictEqual(testData);
});
