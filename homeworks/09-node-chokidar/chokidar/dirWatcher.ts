import EventEmitter from 'events';
import { promises as fsPromises } from 'fs';
import path from 'path';
import chalk from 'chalk';

export const changeEvent = 'change' as const;

export class DirWatcher {
  private dirPath?: string;
  private requiredExtension: string;
  private oldFiles: string[];

  constructor(private watchEmitter: EventEmitter) {
    this.requiredExtension = '.csv';
    this.oldFiles = [];
  }

  public watch(dirPath: string, delay: number) {
    setInterval(async () => {
      this.dirPath = path.resolve(dirPath);
      try {
        const unfilteredFiles = await fsPromises.readdir(this.dirPath);
        const currentFiles = unfilteredFiles.filter(
          (file) =>
            path.extname(file).toLocaleLowerCase() === this.requiredExtension
        );
        const { addedFiles, removedFiles } = this.compareFiles(currentFiles);
        this.oldFiles = currentFiles;
        if (addedFiles.length > 0 || removedFiles.length > 0) {
          this.watchEmitter.emit(
            changeEvent,
            this.dirPath,
            addedFiles,
            removedFiles
          );
        }
      } catch (err) {
        console.error(chalk.red(err));
        process.exit(1);
      }
    }, delay);
  }

  protected compareFiles(currentFiles: string[]): {
    addedFiles: string[];
    removedFiles: string[];
  } {
    const addedFiles = currentFiles.filter(
      (file) => !this.oldFiles.includes(file)
    );

    const removedFiles = this.oldFiles.filter(
      (file) => !currentFiles.includes(file)
    );

    return {
      addedFiles,
      removedFiles,
    };
  }
}
