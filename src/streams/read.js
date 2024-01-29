import { createReadStream } from 'fs';
import { stdin, stdout } from 'node:process';
stdin.pipe(stdout);
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const readablePath = join(__dirname, 'files', 'fileToRead.txt');
  
const read = async () => {
    const readableStream = createReadStream(readablePath);

  readableStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  return new Promise((resolve, reject) => {
    readableStream.on('end', () => {
      resolve();
    });

    readableStream.on('error', (error) => {
      reject(error);
    });
})
};

await read();