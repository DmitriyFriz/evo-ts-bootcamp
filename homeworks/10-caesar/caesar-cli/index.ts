import { pipeline } from 'stream';

import { options } from './cli';
import { readable } from './streams/readable';
import { writable } from './streams/writable';
import { CipherTransform } from './streams/transform';

pipeline(
  readable(options.input),
  new CipherTransform(+options.shift, options.action),
  writable(options.output),
  (err: NodeJS.ErrnoException | null) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Succeeded');
    }
  }
);
