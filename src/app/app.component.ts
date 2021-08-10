import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from './user-modal/user-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson15HW';
  searchField!: string;
  arrayAbonent: Array<IAbonent> = [];
  
  constructor(private modalService: NgbModal) { }

  userEdit(index: number): void {
    let abonent = this.arrayAbonent[index];
    const modalRef = this.modalService.open(UserModalComponent);
    modalRef.componentInstance.abonent = { ...abonent };

    modalRef.result.then(abonent => {
      this.arrayAbonent[index] = abonent;
    }, () => { })
  }

  addAbonent() {
    const modalRef = this.modalService.open(UserModalComponent);

    modalRef.result.then(abonent => {
      this.arrayAbonent.push(abonent);
    }, () => { })
  }
}



export interface IAbonent {
  name: string,
  secondName: string,
  tel: string
}

export class Abonent implements IAbonent {
  constructor(
    public name: string,
    public secondName: string,
    public tel: string
  ) { }
}