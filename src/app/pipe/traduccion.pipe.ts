import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translation'
})
export class TraduccionPipe implements PipeTransform {

  transform(value: string, args?: string): any {
    if (args == 'EN' && value=='titulo') {
      return 'tittle';
    } else if (args == 'EN' && value=='resenia') {
      return 'description';
    } else if (args == 'EN' && value=='autor') {
      return 'author';
    }

    return value;
  }

}
