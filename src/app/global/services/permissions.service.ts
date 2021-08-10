import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Permissions } from '../models/permissions';

const initialPermissionsState: Permissions = {
  canEditPersonnel: true,
  canDeletePersonnel: false
}

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  private permissionsSubject$ = new BehaviorSubject<Permissions>(initialPermissionsState);
  permissions$: Observable<Permissions> = this.permissionsSubject$.asObservable();

  updatePermission(update: Permissions | Partial<Permissions>): void {
    const currentPermissions = this.permissionsSubject$.value;
    const updatedPermissions = { ...currentPermissions, update };
    this.permissionsSubject$.next(updatedPermissions);
  }
}
