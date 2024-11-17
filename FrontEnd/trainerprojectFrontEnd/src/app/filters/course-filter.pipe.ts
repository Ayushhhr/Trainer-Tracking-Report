import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseFilter'
})
export class CourseFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args = args.toLowerCase();
    return value.filter(function(Course:any){
      return JSON.stringify(Course).toLowerCase().includes(args);
    })
  }
}
