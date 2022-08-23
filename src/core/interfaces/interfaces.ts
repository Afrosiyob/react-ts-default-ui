import { ReactElement } from "react";

export interface _IProtectedRoute {
  children: ReactElement;
}

export interface _IPagination {
  page: number;
  size: number;
}

export interface _IRequestProps {
  id?: number;
  params?: object;
  pagination?: _IPagination;
  filters?: object;
  path?: string;
  body?: object;
}

export interface _IProvider {
  children: ReactElement;
}

export interface _IResponseAuth {
  access_token: string;
  refresh_token: string;
  token_type: string;
  authorities?: object;
  organization?: object;
  user?: object;
}

export interface _IPayload {
  navigate: object;
  body: object;
}

export interface _IAuthState {
  isLoading: boolean;
  isReady: boolean;
  data: object | null;
  error: string | null;
}
