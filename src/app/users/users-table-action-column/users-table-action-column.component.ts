import { Component, NgModule, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UsersService } from '../users-page/users.service';

@Component({
  selector: 'app-users-table-action-column',
  templateUrl: './users-table-action-column.component.html',
  styleUrls: ['./users-table-action-column.component.scss']
})
export class UsersTableActionColumnComponent {

  params!: any;

  constructor(private usersService: UsersService) {}

  agInit(params: any) {
    this.params = params;
  }

  deleteUser(email: string) {
    const componentParent = this.params.context.componentParent;
    componentParent.onDeleteUser(email);
  }
}

@NgModule({
  imports: [
    AgGridModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [UsersTableActionColumnComponent],
  exports: [UsersTableActionColumnComponent]
})
export class UsersTableActionColumnModule {}
