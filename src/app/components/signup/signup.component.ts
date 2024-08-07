// src/app/components/signup/signup.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  step: number = 1;
  user: User = { email: '', phoneNumber: '', password: '' };
  organizations = ['Org1', 'Org2', 'Org3'];
  designations = ['Developer', 'Tester', 'Manager'];
  errorMessage: string = '';

  constructor(private mockDataService: MockDataService, private router: Router) { }

  onContinue(): void {
    if (this.step === 1) {
      this.step = 2;
    } else {
      this.mockDataService.addUser(this.user);
      alert('Signup Successful!');
      // Navigate to the login page or another page
    }
  }

  onBack(): void {
    this.step = 1;
  }
}
