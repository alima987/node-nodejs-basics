import { writeFile, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fresh.txt');
const content = 'I am fresh and young';

const create = async () => {
  try {
    await access(filePath);
    throw new Error('FS operation failed: File already exists');
  } catch (error) {
    if (error.code === 'ENOENT') {
      await writeFile(filePath, content);
      console.log('File created successfully');
    } else {
      throw new Error('FS operation failed');
    }
  }
};

await create();
