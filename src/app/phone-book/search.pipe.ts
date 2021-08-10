import { Pipe, PipeTransform } from '@angular/core';
import { IAbonent } from '../user-modal/user-modal.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(abonents: Array<IAbonent>, searchText: string): Array<IAbonent> {
    if (!searchText) {
      return abonents;
    }
    return abonents.filter(abonent => abonent.name.indexOf(searchText) > -1 || abonent.secondName.indexOf(searchText) > -1 || abonent.tel.indexOf(searchText) > -1 );
  }

}
