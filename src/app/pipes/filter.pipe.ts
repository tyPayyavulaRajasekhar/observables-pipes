import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(users: any[], search: string): any[] {
    return users.filter(value => {
      return value.name.toLowerCase().includes(search.toLowerCase());
    });
  }

}
