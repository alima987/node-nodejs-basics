import { createWriteStream } from 'fs';
import { stdin, stdout } from 'node:process';
stdin.pipe(stdout);
const write = async () => {
    const writableStream = createWriteStream('src/streams/files/fileToWrite.txt', {flags: 'a'})
    process.stdin.pipe(writableStream)
    console.log('Write text and press Enter')
    writableStream.on('finish', () => {
        console.log("Data has been written to fileTiWrite.txt")
    })
    writableStream.on('error', (err) => {
        console.log('Error has occured', err)
    })
    process.stdin.on('end', () => {
        writableStream.end();
    });
};

await write();