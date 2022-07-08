import Input from "../ports/input";

export default class ReadInput {
  constructor(public input: Input) { }

  public async readInput(): Promise<string> {
    return await this.input.getString("Qual o arquivo? (./files/06-16-2022.csv)");
  }
}