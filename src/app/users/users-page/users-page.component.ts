import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { User } from '../../global/models/user';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UsersTableModule } from '../users-table/users-table.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  providers: [UsersService]
})
export class UsersPageComponent {

  users$: Observable<User[]> = this.usersService.fetchUsers();

  constructor(private usersService: UsersService) { }

}

@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    UsersTableModule
  ],
  exports: [UsersPageComponent]
})
export class UsersPageModule {}
