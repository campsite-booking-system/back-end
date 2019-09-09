export enum PermissionTypes {
  ViewEstablishment = 'view_establishment',
  EditEstablishment = 'edit_establishment',
}

export type PermissionType = PermissionTypes.ViewEstablishment | PermissionTypes.EditEstablishment;
