import { Pipe, PipeTransform } from '@angular/core';
import Autolinker, { AutolinkerConfig } from 'autolinker';

@Pipe({ name: 'linky' })
export class LinkyPipe implements PipeTransform {
  transform(value: string, options?: AutolinkerConfig): string {
    return Autolinker.link(value, options);
  }
}
