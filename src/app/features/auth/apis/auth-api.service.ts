import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAPIResponse } from '../../../core/models/api.model';
import { ILoginData } from '../models/auth-api.model';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<IAPIResponse<ILoginData>>(`api/auth/login`, {
      email,
      password,
    });
  }
}
