import { Component, NgModule, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-users-table-action-column',
  templateUrl: './users-table-action-column.component.html',
  styleUrls: ['./users-table-action-column.component.scss']
})
export class UsersTableActionColumnComponent implements OnInit {

  params!: any;

  agInit(params: any) {
    console.log({params});
    this.params = params;
  }

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [AgGridModule],
  declarations: [UsersTableActionColumnComponent],
  exports: [UsersTableActionColumnComponent]
})
export class UsersTableActionColumnModule {}
