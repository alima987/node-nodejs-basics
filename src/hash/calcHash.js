import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
  const readStream = fs.createReadStream('src/hash/files/fileToCalculateHashFor.txt');
  const hash = crypto.createHash('sha256');
  
  readStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  readStream.on('end', () => {
    const fileHash = hash.digest('hex');
    console.log('SHA256 hash:', fileHash);
  });

  readStream.on('error', (err) => {
    console.error('Error reading file:', err);
  });
};

await calculateHash();
