import fs from 'fs';
import csvtojson from 'csvtojson';

const inputFile = './csv/nodejs-hw1-ex1.csv';
const outputFile = './nodejs-hw1-ex1.txt';

const inputStream = fs.createReadStream(inputFile);
const outputStream = fs.createWriteStream(outputFile);

const writeLine = (json: JSON) => {
  try {
    const line = JSON.stringify(json);
    outputStream.write(`${line}\n`);
  } catch (error) {
    console.error(error);
  }
};

const onError = (error: Error) => console.error(error);

const onDone = () => {
  console.log('File converted');
  process.exit(0);
};

csvtojson().fromStream(inputStream).subscribe(writeLine, onError, onDone);
