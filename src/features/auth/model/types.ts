export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface User {
  email: string;
  token: string;
  username: string;
  bio: string | null;
  image: string | null;
}

export interface UserResponse {
  user: User;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface UpdateUserPayload {
  email?: string;
  username?: string;
  password?: string;
  image?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuth: boolean;
}
