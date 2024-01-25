import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { access, mkdir, readdir, copyFile} from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileFolderPath = join(__dirname, 'files');
const copyFolderPath = join(__dirname, 'files_copy');

const copy = async () => {
   try {
     await access(copyFolderPath)
   } catch(error) {
     if (error.code === 'ENOENT') {
        await mkdir(copyFolderPath)
     } else {
        throw new Error('File is already existed')
     }
   }
   try {
    const files = await readdir(fileFolderPath);
   for (const file of files) {
    const sourceFile = join(fileFolderPath, file);
    const destinationFile = join(copyFolderPath, file);
    await copyFile(sourceFile, destinationFile);
  }
} catch(error) {
    throw new Error('FS operation failed');
}
};

await copy();
