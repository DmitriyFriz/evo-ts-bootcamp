import EventEmitter from 'events';
import { DirWatcher } from './dirWatcher';
import { Importer } from './importer';

const watchEmitter = new EventEmitter();
const dirWatcher = new DirWatcher(watchEmitter);
dirWatcher.watch('data', 500);
const importer = new Importer(watchEmitter);
importer.listen();
