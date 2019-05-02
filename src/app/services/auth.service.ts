import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(id: string, password: string ) {
    // TODO Do this
    return this.http.post('http://localhost:3000/users/login', {id, password});
  }
}
