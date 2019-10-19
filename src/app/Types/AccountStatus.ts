export enum AccountStatuses {
  Pending = 'pending',
  Active = 'active',
}

export type AccountStatus = AccountStatuses.Pending | AccountStatuses.Active;
