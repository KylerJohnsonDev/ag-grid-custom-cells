import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { User } from '../../global/models/user';
import { UsersTableActionColumnComponent, UsersTableActionColumnModule } from '../users-table-action-column/users-table-action-column.component';
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {

  @Input() users!: User[];
  gridApi!: GridApi;
  gridOptions!: GridOptions;
  gridContext: any;
  // expects user's email to be emitted
  @Output() deleteUser = new EventEmitter<string>();
  // expects user's email to be emitted
  @Output() selectUser = new EventEmitter<string>();

  columnDefs: ColDef[] = [
    {
      headerName: 'Name',
      valueFormatter: ({ data }) => `${data.name.first} ${data.name.last}`
    },
    {
      field: 'email'
    },
    {
      headerName: 'Street',
      valueFormatter: ({ data }) => `${data.location.street.number} ${data.location.street.name}`
    },
    {
      headerName: 'City',
      valueFormatter: ({ data }) => data.location.city
    },
    {
      headerName: 'Country',
      valueFormatter: ({ data }) => data.location.country
    },
    {
      headerName: 'Actions',
      cellRendererFramework: UsersTableActionColumnComponent
    }
  ]

  ngOnInit() {
    this.gridContext = { componentParent: this };
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  onDeleteUser(email: string) {
    this.deleteUser.emit(email);
  }

  onSelectUser(email: string) {
    this.selectUser.emit(email);
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
