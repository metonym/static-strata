import fs from 'fs';
import path from 'path';
import { bufferToJson, formatJson } from '../';

describe('setup', () => {
  test('formatJson', () => {
    expect(formatJson({ key: 'value' })).toMatchSnapshot();
  });

  test('bufferToJson', () => {
    const pathToPkg = path.join(process.cwd(), 'package.json');
    const buffer = fs.readFileSync(pathToPkg);
    expect(bufferToJson(buffer)).toEqual(expect.any(Object));
  });
});
