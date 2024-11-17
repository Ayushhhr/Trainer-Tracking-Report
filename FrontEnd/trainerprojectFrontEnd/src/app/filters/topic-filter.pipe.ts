import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topicFilter'
})
export class TopicFilterPipe implements PipeTransform {

  
  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args = args.toLowerCase();
    return value.filter(function(Topic:any){
      return JSON.stringify(Topic).toLowerCase().includes(args);
    })
  }

}
