import fs from 'fs';
import chalk from 'chalk';

export const readable = (path: string | undefined) => {
  if (path) {
    try {
      fs.accessSync(path, fs.constants.R_OK);
      return fs.createReadStream(path);
    } catch (err) {
      console.error(chalk.red(`Incorrect path ${path}`));
      process.exit(1);
    }
  }

  return process.stdin;
};
