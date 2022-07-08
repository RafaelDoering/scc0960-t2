export default interface Input {
  getString(message: string): Promise<string>;
}