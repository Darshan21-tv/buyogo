// src/app/services/mock-data.service.ts
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  private users: User[] = [
    { email: 'test@example.com', phoneNumber: '9482868857', password: 'password123' }
  ];

  constructor() { }

  getUserByEmailOrPhone(emailOrPhone: string): User | undefined {
    return this.users.find(user => user.email === emailOrPhone || user.phoneNumber === emailOrPhone);
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}
