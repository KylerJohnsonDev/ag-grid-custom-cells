import { Component, Input, NgModule, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { User } from '../../global/models/user';
import { UsersTableActionColumnComponent, UsersTableActionColumnModule } from '../users-table-action-column/users-table-action-column.component';
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  @Input() users!: User[];
  gridApi!: GridApi;
  gridOptions!: GridOptions;

  columnDefs: ColDef[] = [
    {
      headerName: 'Name',
      valueFormatter: ({ data }) => `${data.name.first} ${data.name.last}`
    },
    {
      field: 'email'
    },
    {
      field: 'phone'
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
      headerName: 'State',
      valueFormatter: ({ data }) => data.location.state
    },
    {
      headerName: 'Postal Code',
      valueFormatter: ({ data }) => data.location.postcode
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


  ngOnInit(): void {

  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
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
