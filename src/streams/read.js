import { createReadStream } from 'fs';
import { stdin, stdout } from 'node:process';
stdin.pipe(stdout);
  
const read = async () => {
    const readableStream = createReadStream('src/streams/files/fileToRead.txt');

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