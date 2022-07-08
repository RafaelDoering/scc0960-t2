export default interface File {
  read(filePath: string): Promise<object[]>;
}
