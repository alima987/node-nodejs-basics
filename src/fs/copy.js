import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { access, mkdir, readdir, copyFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileFolderPath = join(__dirname, 'files');
const copyFolderPath = join(__dirname, 'files_copy');

const copy = async () => {
  try {
    await access(copyFolderPath);
    throw new Error('FS operation failed: Files have already been copied');
  } catch (error) {
    if (error.code === 'ENOENT') {
      try {
        await mkdir(copyFolderPath);
        const files = await readdir(fileFolderPath);
        for (const file of files) {
          const sourceFile = join(fileFolderPath, file);
          const destinationFile = join(copyFolderPath, file);
          await copyFile(sourceFile, destinationFile);
        }
      } catch (err) {
        throw new Error('FS operation failed');
      }
    } else {
      throw error;
    }
  }
};

await copy();

