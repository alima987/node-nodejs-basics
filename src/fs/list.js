
import { readdir, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const arrayFolder = join(__dirname, 'files');

const list = async () => {
    try {
        // Check if the 'files' folder exists
        try {
            await access(arrayFolder);
        } catch (error) {
            throw new Error('FS operation failed: "files" folder does not exist');
        }

        // If the folder exists, read its contents
        const files = await readdir(arrayFolder);
        console.log(files);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();
