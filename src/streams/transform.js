import { createReadStream } from 'fs';
import { Transform } from 'stream';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = join(__dirname, 'files', 'fileToRead.txt');
const transform = async () => {
  const toReadFile = createReadStream(pathToFile)
  const reverseStream = new Transform({
    transform(chunk, _, callback) {
      callback(null,chunk.toString().split('').reverse().join(''));
    }
  });
  toReadFile.pipe(reverseStream).pipe(process.stdout);
};

await transform();