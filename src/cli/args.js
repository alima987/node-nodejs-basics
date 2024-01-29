const parseArgs = () => {
    const args = process.argv.slice(2);

    args.forEach((arg, index, arr) => {
      if (index % 2 === 0) {
        const argName = arg.replace(/^--/, ''); 
        const argValue = arr[index + 1];
        console.log(`${argName} is ${argValue}`);
      }
    });
};

parseArgs();