import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { KeyValuePairModule } from 'src/app/global/key-value-pair/key-value-pair.component';
import { User } from 'src/app/global/models/user';
import { ConcatPipeModule } from 'src/app/global/pipes/concat.pipe';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.scss']
})
export class SelectedUserComponent {

  userFullName!: string;
  streetAddress!: string;

  @Input() user!: User | null;
  // @Input('user')
  // set user (value: User | null) {
  //   this.userFullName = value?.name?.first && value?.name?.last
  //     ? `${value?.name?.first} ${value?.name?.last}`
  //     : 'N/A';

  //   this.userFullName = value?.location?.street?.number && value?.location?.street?.name
  //   ? `${value?.location?.street?.number} ${value?.location?.street?.name}`
  //   : 'N/A'
  // }

  @Output() clearSelectedUser = new EventEmitter<void>();

}

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    KeyValuePairModule,
    ConcatPipeModule
  ],
  declarations: [SelectedUserComponent],
  exports: [SelectedUserComponent]
})
export class SelectedUserModule {}
