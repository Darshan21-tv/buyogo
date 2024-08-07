// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailOrPhone: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private mockDataService: MockDataService, private router: Router) { }

  onLogin(): void {
    const user = this.mockDataService.getUserByEmailOrPhone(this.emailOrPhone);
    if (user && user.password === this.password) {
      alert('Login Successful!');
      // Navigate to the dashboard or another page
    } else {
      this.errorMessage = 'Invalid email/phone number or password';
    }
  }
}
