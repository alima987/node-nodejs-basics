import { stdin, stdout } from 'node:process';
import { Transform } from 'stream';
const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
          // Reverse the chunk (text) and push it to the output
          this.push(chunk.toString().split('').reverse().join(''));
          callback();
        }
      });
    
      // Pipe the input from process.stdin through the reverse stream to process.stdout
      process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();