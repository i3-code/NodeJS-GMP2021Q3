const processInt = process.stdin;
const processOut = process.stdout;

const readLines = async () => {
  for await (const inputBuffer of processInt) {
    try {
      const line = inputBuffer.toString().replace(/[\r\n]/g, '');
      const reversedLine = line.split('').reverse().join('');
      processOut.write(`${reversedLine}\n\n`);
    } catch (error) {
      console.error(error);
    }
  }
  process.exit(0);
};

try {
  readLines();
} catch (error) {
  console.error(error);
}
