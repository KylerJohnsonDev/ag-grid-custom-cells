import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Permissions } from './../models/permissions';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  private permissionsUrl = '/assets/seed-permissions.json';

  fetchPermissions$: Observable<Permissions> = this.http
    .get<Permissions>(this.permissionsUrl)
    .pipe(
      shareReplay()
    );

  constructor(private http: HttpClient) { }

}

