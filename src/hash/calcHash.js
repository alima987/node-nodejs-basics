import fs from 'fs';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const readSteamPath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const readStream = fs.createReadStream(readSteamPath);
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
