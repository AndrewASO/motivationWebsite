

import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, { username, displayName }) => ({
    ...state,
    isLoggedIn: true,
    username: username,
    displayName: displayName
  })),
  on(AuthActions.logout, state => ({
    ...state,
    isLoggedIn: false,
    username: null,
    displayName: null
  }))
);
