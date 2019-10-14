export enum RoleTypes {
  Administrator = 'administrator',
  Manager = 'manager',
  Viewer = 'viewer',
}

export type RoleType = RoleTypes.Administrator | RoleTypes.Manager | RoleTypes.Viewer;
