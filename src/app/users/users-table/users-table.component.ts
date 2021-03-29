import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { User } from '../../global/models/user';
import { UsersTableActionColumnComponent, UsersTableActionColumnModule } from '../users-table-action-column/users-table-action-column.component';
import { Permissions } from './../../global/models/permissions';
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {

  @Input() users!: User[] | null;
  @Input() permissions!: Permissions | null;
  gridApi!: GridApi;
  gridContext: any;
  columnDefs!: ColDef[];
  // expects user's email to be emitted
  @Output() deleteUser = new EventEmitter<string>();
  // expects user's email to be emitted
  @Output() selectUser = new EventEmitter<string>();



  ngOnInit() {
    this.gridContext = { componentParent: this };
    this.buildColumnDefinitions();
  }

  buildColumnDefinitions() {
    console.log(this.permissions)
    this.columnDefs = [
      {
        colId: 'name',
        headerName: 'Name',
        valueFormatter: ({ data }) => `${data.name.first} ${data.name.last}`
      },
      {
        colId: 'email',
        field: 'email',
        width: 300
      },
      {
        colId: 'street',
        headerName: 'Street',
        valueFormatter: ({ data }) => `${data.location.street.number} ${data.location.street.name}`
      },
      {
        colId: 'city',
        headerName: 'City',
        valueFormatter: ({ data }) => data.location.city
      },
      {
        colId: 'country',
        headerName: 'Country',
        valueFormatter: ({ data }) => data.location.country
      },
      {
        colId: 'actions',
        headerName: 'Actions',
        cellRendererFramework: UsersTableActionColumnComponent,
        cellRendererParams: {
          permissions: this.permissions
        }
      }
    ]
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    const colIds = this.columnDefs.map(col => col.colId);
    this.gridApi.sizeColumnsToFit();
  }

  onDeleteUser(email: string) {
    this.deleteUser.emit(email);
  }

  onRowSelected() {
    const selectedRow = this.gridApi.getSelectedRows()[0];
    const userEmail = selectedRow?.email;
    this.selectUser.emit(userEmail);
  }

}

@NgModule({
  imports: [
    AgGridModule.withComponents([]),
    UsersTableActionColumnModule
  ],
  declarations: [UsersTableComponent],
  exports: [UsersTableComponent]
})
export class UsersTableModule {}
