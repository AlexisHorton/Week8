import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListPartsComponent } from './list-parts/list-parts.component';
import { OneComputerPartComponent } from './one-computer-part/one-computer-part.component';
import { AddPartComponent } from './add-part/add-part.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPartsComponent,
    OneComputerPartComponent,
    AddPartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
