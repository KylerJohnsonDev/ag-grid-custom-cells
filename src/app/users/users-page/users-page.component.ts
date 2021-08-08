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
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditUserEmailDialogComponent, EditUserEmailDialogModule } from '../edit-user-email-dialog/edit-user-email-dialog.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  providers: [UsersService]
})
export class UsersPageComponent {

  users$: Observable<User[]> = this.usersService.users$;
  selectedUser$: Observable<User|null> = this.usersService.selectedUser$;

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog
  ) { }

  onDeleteUser(email: string) {
    this.usersService.deleteUser(email);
  }

  onSelectUser(email: string) {
    this.usersService.selectUser(email);
  }

  onUpdateEmail(email: string) {
    const dialogRef = this.dialog.open(EditUserEmailDialogComponent, {
      width: '300px',
      data: email
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) { // do not update if no result
        this.usersService.updateUserEmail(email, result);
      }
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
    EditUserEmailDialogModule
  ],
  exports: [UsersPageComponent]
})
export class UsersPageModule {}
