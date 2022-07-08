import prompts from 'prompts';

import Input from '../ports/input';

export default class PromptsInput implements Input {
  async getString(message: string): Promise<string> {
    return (await prompts([
      {
        type: 'text',
        name: 'value',
        message,
      }
    ])).value;
  }

}