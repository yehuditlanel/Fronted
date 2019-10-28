import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 
  transform(arr: any, searchVal?: any): any {
    var res = [];
    arr.forEach(element => {
      if (element.indexOf(searchVal) > -1) {
        res.push(element);
      }
    });
    return res;
  }

}
