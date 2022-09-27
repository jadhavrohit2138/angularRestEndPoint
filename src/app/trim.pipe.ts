import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: any,args?: any): any {
    if(!args){
      return value;
    }
    return value.filter((value: {name: string; })=>{
      let rVal = (value.name.toLocaleLowerCase().includes(args) || value.name.includes(args));
      return rVal    });
  }

}
