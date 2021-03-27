import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { User } from 'src/app/global/models/user';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.scss']
})
export class SelectedUserComponent {

  @Input() user!: User | null;

  @Output() clearSelectedUser = new EventEmitter<void>();

}

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [SelectedUserComponent],
  exports: [SelectedUserComponent]
})
export class SelectedUserModule {}
