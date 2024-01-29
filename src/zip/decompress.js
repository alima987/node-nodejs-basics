import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compressPath = join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = join(__dirname, 'files', 'archive.gz');
const decompress = async () => {
    const compressFile = createWriteStream(compressPath);
    const archiveFile = createReadStream(archivePath);
    const gunzip = createGunzip();

    return new Promise((resolve, reject) => {
        archiveFile.pipe(gunzip).pipe(compressFile)
            .on('finish', resolve)
            .on('error', reject);
            console.log('File is decompressed successfully')
    });
};

await decompress();
