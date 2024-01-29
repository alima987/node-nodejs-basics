import { createWriteStream } from 'fs';
import { stdin, stdout } from 'node:process';
stdin.pipe(stdout);
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const writablePath = join(__dirname, 'files', 'fileToWrite.txt');
const write = async () => {
    const writableStream = createWriteStream(writablePath, {flags: 'a'})
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