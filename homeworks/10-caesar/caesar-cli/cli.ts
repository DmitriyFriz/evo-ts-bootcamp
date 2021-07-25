import { program } from 'commander';

interface IOptions {
  shift: string;
  action: 'encode' | 'decode';
  input?: string;
  output?: string;
}

program
  .storeOptionsAsProperties(false)
  .version('1.0.0')
  .description('caesar cli');

program
  .requiredOption(
    '-s, --shift <number> [required]',
    'Set the shift for decode/encode data'
  )
  .requiredOption(
    '-a, --action <action> [required] [choices: "encode", "decode"]',
    'Specify what action you want to perform'
  )
  .option('-i, --input <string>', 'Specify the file where to get the data from')
  .option('-o, --output <string>', 'Specify the file to save the data to');

program.parse(process.argv);
export const options = program.opts() as IOptions;

if (options.action !== 'encode' && options.action !== 'decode') {
  console.error(`Incorrect action ${options.action}`);
  process.exit();
}

if (!(isFinite(+options.shift) && +options.shift == parseInt(options.shift))) {
  console.error(`Incorrect shift parameter ${options.shift}`);
  process.exit();
}
