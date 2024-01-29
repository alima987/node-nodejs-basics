import { readFile} from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToOpen = join(__dirname, 'files', 'fileToRead.txt');
const read = async () => {
    try {
       const contentOfFile = await readFile(fileToOpen, 'utf8')
       console.log(contentOfFile)
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await read();