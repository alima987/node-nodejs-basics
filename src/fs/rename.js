import { access, rename} from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const oldFileName = join(__dirname, 'files', 'wrongFilename.txt');
const newFileName = join(__dirname, 'files', 'properFilename.md');
const renameFile = async () => {
   try {
    await access(newFileName);
   }catch (error) {
    if(error.code === 'ENOENT') {
        await rename(oldFileName, newFileName)
    }else {
        throw new Error('FS operation failed')
     }
   }
};

await renameFile();