import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { User } from '../../global/models/user';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UsersTableModule } from '../users-table/users-table.component';
import { SelectedUserModule } from '../selected-user/selected-user.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  providers: [UsersService]
})
export class UsersPageComponent {

  users$: Observable<User[]|null> = this.usersService.users$;
  selectedUser$: Observable<User|null> = this.usersService.selectedUser$;

  constructor(private usersService: UsersService) { }

  onDeleteUser(email: string) {
    this.usersService.deleteUser(email);
  }

  onSelectUser(email: string) {
    this.usersService.selectUser(email);
  }

  onClearSelectedUser() {
    this.usersService.clearSelectedUser();
  }
}

@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    UsersTableModule,
    SelectedUserModule,
    MatToolbarModule,
    MatSnackBarModule
  ],
  exports: [UsersPageComponent]
})
export class UsersPageModule {}
