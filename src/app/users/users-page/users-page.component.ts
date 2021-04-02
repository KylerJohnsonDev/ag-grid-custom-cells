import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { combineLatest, Observable } from 'rxjs';
import { User } from '../../global/models/user';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UsersTableModule } from '../users-table/users-table.component';
import { SelectedUserModule } from '../selected-user/selected-user.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PermissionsService } from 'src/app/global/services/permissions.service';
import { Permissions } from '../../global/models/permissions';
import { map } from 'rxjs/operators';
import { EditUserNameDialogComponent, EditUserNameDialogModule } from '../edit-user-name-dialog/edit-user-name-dialog.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  providers: [UsersService]
})
export class UsersPageComponent {

  private users$: Observable<User[]|null> = this.usersService.users$;
  private selectedUser$: Observable<User|null> = this.usersService.selectedUser$;
  private permissions$: Observable<Permissions> = this.permissionsService.fetchPermissions$;

  usersPageViewModel$ = combineLatest([
    this.users$,
    this.selectedUser$,
    this.permissions$
  ]).pipe(
    map(([users, selectedUser, permissions]) => (
      { users, selectedUser, permissions }
    ))
  )

  constructor(
    private usersService: UsersService,
    private permissionsService: PermissionsService,
    public dialog: MatDialog
  ) { }

  onDeleteUser(email: string) {
    this.usersService.deleteUser(email);
  }

  onSelectUser(email: string) {
    this.usersService.selectUser(email);
  }

  onUpdateEmail(email: string) {
    const dialogRef = this.dialog.open(EditUserNameDialogComponent, {
      width: '300px',
      data: email
    });

    dialogRef.afterClosed().subscribe(result => {
      this.usersService.updateUserEmail(email, result);
    });
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
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    EditUserNameDialogModule
  ],
  exports: [UsersPageComponent]
})
export class UsersPageModule {}
