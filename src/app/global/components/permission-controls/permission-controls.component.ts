import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Permissions, PermissionUpdateEvent } from '../../models/permissions';

@Component({
  selector: 'app-permission-controls',
  templateUrl: './permission-controls.component.html',
  styleUrls: ['./permission-controls.component.scss']
})
export class PermissionControlsComponent {

  @Input() permissions!: Permissions;
  @Output() permissionUpdate = new EventEmitter<PermissionUpdateEvent>();

  updatePermission(key: keyof Permissions, value: boolean) {
    this.permissionUpdate.emit({ key, value });
  }
}

@NgModule({
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  declarations: [PermissionControlsComponent],
  exports: [PermissionControlsComponent]
})
export class PermissionsControlModule {}
