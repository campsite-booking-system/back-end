export enum PermissionTypes {
  ViewEstablishment = 'view_establishment',
  CreateEstablishment = 'create_establishment',
  EditEstablishment = 'edit_establishment',
  DeleteEstablishment = 'delete_establishment',

  ViewEstablishmentToken = 'view_establishment_token',
  CreateEstablishmentToken = 'create_establishment_token',
  EditEstablishmentToken = 'edit_establishment_token',
  DeleteEstablishmentToken = 'delete_establishment_token',

  ViewRental = 'view_rental',
  CreateRental = 'create_rental',
  EditRental = 'edit_rental',
  DeleteRental = 'delete_rental',
}

export type PermissionType =
  | PermissionTypes.ViewEstablishment
  | PermissionTypes.CreateEstablishment
  | PermissionTypes.EditEstablishment
  | PermissionTypes.DeleteEstablishment
  | PermissionTypes.ViewEstablishmentToken
  | PermissionTypes.CreateEstablishmentToken
  | PermissionTypes.EditEstablishmentToken
  | PermissionTypes.DeleteEstablishmentToken
  | PermissionTypes.ViewRental
  | PermissionTypes.CreateRental
  | PermissionTypes.EditRental
  | PermissionTypes.DeleteRental;
