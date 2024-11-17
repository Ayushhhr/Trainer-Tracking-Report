import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtopicFilter'
})
export class SubtopicFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args = args.toLowerCase();
    return value.filter(function(SubTopic:any){
      return JSON.stringify(SubTopic).toLowerCase().includes(args);
    })
  }

}
