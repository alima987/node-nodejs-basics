import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
const decompress = async () => {
    const compressFile = createWriteStream('src/zip/files/fileToCompress.txt');
    const archiveFile = createReadStream('src/zip/files/archive.gz');
    const gunzip = createGunzip();

    return new Promise((resolve, reject) => {
        archiveFile.pipe(gunzip).pipe(compressFile)
            .on('finish', resolve)
            .on('error', reject);
    });
};

await decompress();