import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cantidadpalabras'
})
export class CantidadpalabrasPipe implements PipeTransform {

  transform(value: string, args?: string): any {
    if (args=="CP")
    {
      return value.split(' ').length;
    } else if (args=="CL")
    {
      return value.length;      
    }
  }

}
