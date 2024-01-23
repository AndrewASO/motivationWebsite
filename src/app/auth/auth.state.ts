

export interface AuthState {
    isLoggedIn: boolean;
    username: string | null;
    displayName: string | null;
}
  
export const initialAuthState: AuthState = {
    isLoggedIn: false,
    username: null,
    displayName: null
};
  