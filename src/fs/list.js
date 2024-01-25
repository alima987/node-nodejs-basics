import { readdir} from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const arrayFolder = join(__dirname, 'files');
const files = await readdir(arrayFolder)
const list = async () => {
    try {
        console.log(files)
    }catch (error) {
        throw new Error('FS operation failed')
    }
};

await list();