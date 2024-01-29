import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compressPath = join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const compressFile = createReadStream(compressPath);
    const archiveFile = createWriteStream(archivePath);
    const gzip = createGzip();
    compressFile.pipe(gzip).pipe(archiveFile);

  return new Promise((resolve, reject) => {
    archiveFile.on('finish', resolve);
    archiveFile.on('error', reject);
    console.log('File is compressed successfully');
  });
};

await compress();
