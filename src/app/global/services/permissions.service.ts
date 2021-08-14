import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PermissionsMap } from '../models/permissions';

const initialPermissionsState = new Map<string, boolean>([
  ["canEditPersonnel", true],
  ["canDeletePersonnel", false]
]);

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  private permissionsSubject$ = new BehaviorSubject<PermissionsMap>(initialPermissionsState);
  permissions$: Observable<PermissionsMap> = this.permissionsSubject$.asObservable();

  updatePermission(key: string, value: boolean): void {
    const permissions = this.permissionsSubject$.value;
    permissions.set(key, value);
  }
}
