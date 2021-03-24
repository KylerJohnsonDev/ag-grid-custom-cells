import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UsersResponse } from './user';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {

  private url = 'https://randomuser.me/api?results=25';

  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<User[]> {
    return this.http
      .get<UsersResponse>(this.url)
      .pipe(map(response => response.results))
  }
}
