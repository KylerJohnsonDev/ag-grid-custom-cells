import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UsersResponse } from '../../global/models/user';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UsersService {

  private url = 'https://randomuser.me/api?results=25';

  private usersSubject$ = new BehaviorSubject<User[]>([]);
  users$: Observable<User[]|null> = this.usersSubject$.asObservable();

  private selectedUserSubject$ = new BehaviorSubject<User|null>(null);
  selectedUser$: Observable<User|null> = this.selectedUserSubject$.asObservable();

  private fetchUsers$ = this.http
    .get<UsersResponse>(this.url)
    .pipe(
      map(response => response.results),
    );


  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) {
    // http requests complete automatically after emitting a response
    // no need to unsubscribe
    this.fetchUsers$.subscribe(users => this.usersSubject$.next(users));
  }

  deleteUser(email: string) {
    const usersState = this.usersSubject$.value;
    const usersStateModified = usersState.filter(user => user.email !== email);
    this.usersSubject$.next(usersStateModified);
    this.snackbar.open('User successfully deleted', 'dismiss', {
      duration: 3000
    })
  }

  selectUser(email: string) {
    const usersState = [...this.usersSubject$.value];
    const selectedUser = usersState.find(user => user.email === email) as User;
    this.selectedUserSubject$.next(selectedUser);
  }

  clearSelectedUser() {
    this.selectedUserSubject$.next(null);
  }

}
