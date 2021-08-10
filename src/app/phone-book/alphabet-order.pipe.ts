import { Pipe, PipeTransform } from '@angular/core';
import { IAbonent } from '../app.component';

@Pipe({
  name: 'alphabetOrder'
})

export class AlphabetOrderPipe implements PipeTransform {

  transform(array: Array<IAbonent>, orderField: string | null, orderType: number): Array<IAbonent> {
    if (orderType == 0) {
      return array;
    }

    return array.sort((a: IAbonent, b: IAbonent) => {
      let aValue: string | null = null;
      let bValue: string | null = null;

      if (orderField == 'name') {
        aValue = a.name;
        bValue = b.name;
      } else if (orderField == 'secondName') {
        aValue = a.secondName;
        bValue = b.secondName;
      }
      else if (orderField == 'tel') {
        aValue = a.tel;
        bValue = b.tel;
      }
      if (aValue == null && bValue == null) return 0;
      if (aValue == bValue) return 0;

      if (aValue == null && bValue != null) return orderType;
      if (aValue != null && bValue == null) return -orderType;
      return aValue!.toString().toLowerCase() > bValue!.toString().toLowerCase() ? orderType : -orderType;
    });
  }
}
