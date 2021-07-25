import fs from 'fs';
import chalk from 'chalk';

export const writable = (path: string | undefined) => {
  if (path) {
    try {
      fs.accessSync(path, fs.constants.W_OK);
      return fs.createWriteStream(path, { flags: 'a' });
    } catch (err) {
      console.error(chalk.red(`Incorrect path ${path}`));
      process.exit(1);
    }
  }

  return process.stdout;
};
