import EventEmitter from 'events';
import { changeEvent } from './dirWatcher';
import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import csvtojson from 'csvtojson';
import chalk from 'chalk';

export class Importer {
  constructor(private watchEmitter: EventEmitter) {}

  listen() {
    this.watchEmitter.on(
      changeEvent,
      async (dirPath: string, addedFiles: string[], removedFiles: string[]) => {
        addedFiles.forEach(async (file) => {
          const fullPath = path.resolve(dirPath, file);
          const content = await this.import(fullPath);
          const csvContent = await csvtojson().fromString(content);
          console.log(chalk.blue('ADDED:'), file, csvContent);
        });

        removedFiles.forEach((file) =>
          console.log(chalk.yellow('REMOVED:'), file)
        );
      }
    );
  }

  import(filePath: string) {
    return fsPromises.readFile(filePath, { encoding: 'utf8' });
  }

  importSync(filePath: string) {
    return fs.readFileSync(filePath, { encoding: 'utf8' });
  }
}
