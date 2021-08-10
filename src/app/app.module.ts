import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlphabetOrderPipe } from './phone-book/alphabet-order.pipe';
import { UserModalComponent } from './user-modal/user-modal.component';
import { SearchPipe } from './phone-book/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    AlphabetOrderPipe,
    UserModalComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
