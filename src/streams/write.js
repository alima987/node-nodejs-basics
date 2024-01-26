import { createWriteStream } from 'fs';
import { stdin, stdout } from 'node:process';
stdin.pipe(stdout);
const write = async () => {
    const writableStream = createWriteStream('src/streams/files/fileToWrite.txt')
    process.stdin.on('data', (chunk) => {
        writableStream.write(chunk);
      });
    writableStream.on('finish', () => {
        console.log("Data has been written to fileTiWrite.txt")
    })
    writableStream.on('error', (err) => {
        console.log('Error', err)
    })
    process.stdin.on('end', () => {
        writableStream.end();
    });
};

await write();