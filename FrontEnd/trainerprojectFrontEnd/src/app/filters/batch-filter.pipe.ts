import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'batchFilter'
})
export class BatchFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args = args.toLowerCase();
    return value.filter(function(Batch:any){
      return JSON.stringify(Batch).toLowerCase().includes(args);
    })
  }
}
