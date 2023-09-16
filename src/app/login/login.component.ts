import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginSuccess: boolean = false;
  loginError: boolean = false;

  login() {

    if (this.email === 'batedeira@gmail.com' && this.password === '123456') {
      this.loginSuccess = true;
      this.loginError = false; 
      this.email = ''; 
      this.password = ''; 
    } else {
      this.loginSuccess = false;
      this.loginError = true; 
    }
  }
}
