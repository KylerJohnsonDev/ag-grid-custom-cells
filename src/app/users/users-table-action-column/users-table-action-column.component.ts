import { Component, NgModule, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-users-table-action-column',
  templateUrl: './users-table-action-column.component.html',
  styleUrls: ['./users-table-action-column.component.scss']
})
export class UsersTableActionColumnComponent {

  params!: any;

  agInit(params: any) {
    this.params = params;
  }

  deleteUser(email: string) {
    const componentParent = this.params.context.componentParent;
    componentParent.onDeleteUser(email);
  }

  updateEmail(email: string) {
    const componentParent = this.params.context.componentParent;
    componentParent.onUpdateEmail(email);
  }
}

@NgModule({
  imports: [
    AgGridModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [UsersTableActionColumnComponent],
  exports: [UsersTableActionColumnComponent]
})
export class UsersTableActionColumnModule {}
