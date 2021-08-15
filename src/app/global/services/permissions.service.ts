import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Permissions } from '../models/permissions';

const initialPermissionsState = {
  canEditPersonnel: true,
  canDeletePersonnel: false
}

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  private permissionsSubject$ = new BehaviorSubject<Permissions>(initialPermissionsState);
  permissions$: Observable<Permissions> = this.permissionsSubject$.asObservable();

  updatePermissions(key: keyof Permissions, value: boolean): void {
    const permissionsCopy = { ...this.permissionsSubject$.value, [key]: value };
    this.permissionsSubject$.next(permissionsCopy);
  }
}
