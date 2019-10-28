import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortStr'
})
export class ShortStrPipe implements PipeTransform {

  transform(strToCut: any, limit?: any): any {
    
    if (strToCut.length > 2)
      return strToCut.substr(0, 2) + "...";
    return strToCut;
  }

}
