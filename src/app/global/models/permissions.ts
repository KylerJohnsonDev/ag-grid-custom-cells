export type PermissionsMap = Map<string, boolean>;

export interface PermissionUpdateEvent {
  key: string,
  value: boolean
}
