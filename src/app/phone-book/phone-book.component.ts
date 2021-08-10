import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAbonent } from '../app.component';


@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
  @Input() arrayOfAbonents: Array<IAbonent> = [];
  @Input() searchText: string = '';
  @Output() userEdited = new EventEmitter<number>();
  sortColumn: string | null = null;
  orderType: number = 0;
 
  constructor() { }

  ngOnInit(): void {
  }

  headerClick(column: string): void {
    if (this.arrayOfAbonents) {
      this.sortColumn = column;
      if (this.orderType == 0) {
        this.orderType = 1;
      }
      else {
        this.orderType = -this.orderType;
      }
    }
  }

  delete(index: number): void {
    this.arrayOfAbonents.splice(index, 1)
  }

  edit(index: number): void {
    this.userEdited.emit(index);
  }
}


