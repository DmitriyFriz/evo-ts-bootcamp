import EventEmitter from 'events';
import { DirWatcher, changeEvent } from './dirWatcher';

const watchEmitter = new EventEmitter();
const dirWatcher = new DirWatcher(watchEmitter);
dirWatcher.watch('data', 1000);
watchEmitter.on(
  changeEvent,
  (dirPath: string, addedFiles: string[], removedFiles: string[]) =>
    console.log(dirPath, addedFiles, removedFiles)
);
