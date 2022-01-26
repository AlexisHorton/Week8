import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CurrentUser } from './current-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicFrontEnd';

  MyUser:CurrentUser = {
    username: '',
    firstname: '',
    lastname: '',
    email: ''
  }

  newUsername: string = '';
  newFirstName: string = '';
  newLastName: string = '';
  newEmail: string = '';

  constructor(private http: HttpClient) {}


  getUser(){

    this.http.get<CurrentUser>('https://localhost:44342/user').subscribe(
      (result) => {
        this.MyUser = result;
      }
    )

  }

  postUser(){
    let tempObj: CurrentUser = {
      username: this.newUsername,
      firstname: this.newFirstName,
      lastname: this.newLastName,
      email: this.newEmail
    };
    this.http.post<CurrentUser>('https://localhost:44342/user', tempObj).subscribe(
      (result:any) => {
        this.MyUser = result;
        }
    )
  }
}
