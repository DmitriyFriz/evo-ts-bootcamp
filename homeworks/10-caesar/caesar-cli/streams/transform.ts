import { Transform, TransformCallback } from 'stream';
import { cipher } from '../cipher';

export class CipherTransform extends Transform {
  private shift: number;

  constructor(shift: number, action: 'encode' | 'decode') {
    super();
    this.shift = action === 'encode' ? shift : -shift;
  }
  _transform(
    data: BufferSource,
    encoding: BufferEncoding,
    callback: TransformCallback
  ) {
    this.push(cipher(data, this.shift));
    callback();
  }
}
