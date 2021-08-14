import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PermissionsMap, PermissionUpdateEvent } from '../../models/permissions';

@Component({
  selector: 'app-permission-controls',
  templateUrl: './permission-controls.component.html',
  styleUrls: ['./permission-controls.component.scss']
})
export class PermissionControlsComponent {

  @Input() permissions!: PermissionsMap;
  @Output() permissionUpdate = new EventEmitter<PermissionUpdateEvent>();

  updatePermission(key: string, value: boolean) {
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
