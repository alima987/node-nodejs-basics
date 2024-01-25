import { unlink} from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const deleteFile = join(__dirname, 'files', 'fileToRemove.txt');
const remove = async () => {
    try{
       await unlink(deleteFile) 
    } catch(error) {
        throw new Error('FS operation failed')
    }
};

await remove();