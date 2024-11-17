import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profileFilter'
})
export class ProfileFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args = args.toLowerCase();
    return value.filter(function(Profile:any){
      return JSON.stringify(Profile).toLowerCase().includes(args);
    })
  }

}
