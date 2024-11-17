import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trainerFilter'
})
export class TrainerFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args = args.toLowerCase();
    return value.filter(function(Trainer:any){
      return JSON.stringify(Trainer).toLowerCase().includes(args);
    })
  }

}
