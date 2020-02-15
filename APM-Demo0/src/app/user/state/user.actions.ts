import { Action } from "@ngrx/store";

export enum UserActionTypes {
  MaskUserName = "[User] Mask User Name"
}

export class ToggleMaskUserName implements Action {
  readonly type = UserActionTypes.MaskUserName;

  constructor(public payload: boolean) {}
}

export type UserActions = ToggleMaskUserName;
