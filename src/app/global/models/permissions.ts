export interface Permissions {
  canEditPersonnel: boolean;
  canDeletePersonnel: boolean;
}

export interface PermissionUpdateEvent {
  key: keyof Permissions,
  value: boolean
}
