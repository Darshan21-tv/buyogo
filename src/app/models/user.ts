// src/app/models/user.ts
export interface User {
    email: string;
    phoneNumber: string;
    password: string;
    name?: string;
    organization?: string;
    designation?: string;
    birthDate?: Date;
    city?: string;
    pincode?: string;
  }
  