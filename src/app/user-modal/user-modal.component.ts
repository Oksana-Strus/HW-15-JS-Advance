import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})




export class UserModalComponent implements OnInit {

  checkoutForm: FormGroup = new FormGroup({
    'abonent.name': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    'abonent.secondName': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]),
    'abonent.tel': new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
  });


  @Input() abonent: IAbonent = {
    name: '',
    secondName: '',
    tel: ''
  };

  // username = new FormControl(); 

  constructor(public modal: NgbActiveModal) { }

  save(): void {
    this.modal.close(this.abonent);
  }

  ngOnInit(): void {
  }


  onSubmit(): void {

    if (this.checkoutForm.valid) {
      console.log('VALID');
      this.checkoutForm.value['abonent.name'];
      this.checkoutForm.value['abonent.secondName'];
      this.checkoutForm.value['abonent.tel'];
    }
    else {
      console.log('INVALID');
    }
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
