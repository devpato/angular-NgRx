import { User } from "../user";
import * as fromRoot from "../../state/app.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserActions, UserActionTypes } from "./user.actions";

export interface State extends fromRoot.State {
  user: UserState;
}

export interface UserState {
  maskUser: boolean;
}

const initialState: UserState = {
  maskUser: false
};

/*Selector */

const getUsersFeatureState = createFeatureSelector<UserState>("user");

export const getUserMaskCode = createSelector(
  getUsersFeatureState,
  state => state.maskUser //proyector function
);

export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.MaskUserName: {
      return {
        ...state,
        maskUser: action.payload
      };
    }

    default:
      return state;
  }
}
