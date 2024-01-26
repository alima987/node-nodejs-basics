import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
    const compressFile = createReadStream('src/zip/files/fileToCompress.txt');
    const archiveFile = createWriteStream('src/zip/files/archive.gz');
    const gzip = createGzip();
    compressFile.pipe(gzip).pipe(archiveFile);

  return new Promise((resolve, reject) => {
    archiveFile.on('finish', resolve);
    archiveFile.on('error', reject);
  });
};

await compress();