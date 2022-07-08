import * as fsPromises from 'fs/promises';
import { parse } from 'csv-parse/sync';

import File from "../ports/file";

export default class CsvFile implements File {
  constructor() { }

  async read(filePath: string): Promise<any[]> {
    const dataString = await fsPromises.readFile(filePath);

    const data = parse(dataString, { columns: true });

    return data;
  }
}