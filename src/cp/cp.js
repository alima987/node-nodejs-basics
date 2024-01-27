import { spawn } from 'child_process';
const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', ['src/cp/files/script.js', ...args], {
        stdio: ['pipe', 'pipe', process.stderr, 'ipc'] 
      });
    
      childProcess.stdout.on('data', (data) => {
        console.log(`Received from child process: ${data.toString()}`);
      });

      process.stdin.on('data', (data) => {
        childProcess.stdin.write(data);
      });
    
      childProcess.on('exit', (code, signal) => {
        console.log(`Child process exited with code ${code} and signal ${signal}`);
      });
    
      childProcess.on('error', (err) => {
        console.error('Failed to start child process.', err);
      });
    
      process.on('exit', () => {
        childProcess.kill(); 
      });
    
};


spawnChildProcess(['arg1', 'arg2']);
