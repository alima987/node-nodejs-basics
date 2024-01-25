import { createHash } from 'crypto';
import { createReadStream } from 'fs';
const fileStream = createReadStream('fileToCalculateHashFor.txt');
const hash = createHash('sha256');
const calculateHash = async () => {

    fileStream.on('data', (chunk) => {
        hash.update(chunk);
      });
    
      fileStream.on('end', () => {
        const digest = hash.digest('hex');
        console.log(`SHA256 hash of ${inputFilePath}: ${digest}`);
      });
    
      fileStream.on('error', (error) => {
        console.error('Error reading file:', error);
      });
    
}

await calculateHash();