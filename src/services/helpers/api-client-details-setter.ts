export interface ApiClientDetails {
  readonly clientSecret: string;
  readonly clientId: string;
  readonly scopes: string;
}

// View Customers Scope
export const API_VIEW_CUSTOMERS_SCOPE: ApiClientDetails = {
  clientSecret: import.meta.env.VITE_APP_VIEW_CLIENT_SECRET as string,
  clientId: import.meta.env.VITE_APP_VIEW_CLIENT_ID as string,
  scopes: import.meta.env.VITE_APP_VIEW_SCOPE as string,
};

// Manage My Profile Scope
export const API_MANAGE_PROFILE_SCOPE: ApiClientDetails = {
  clientSecret: import.meta.env.VITE_APP_MANAGE_CLIENT_SECRET as string,
  clientId: import.meta.env.VITE_APP_MANAGE_CLIENT_ID as string,
  scopes: import.meta.env.VITE_APP_MANAGE_SCOPE as string,
};

// Orders Scope
export const API_ORDERS_SCOPE: ApiClientDetails = {
  clientSecret: import.meta.env.VITE_APP_ORDERS_CLIENT_SECRET as string,
  clientId: import.meta.env.VITE_APP_ORDERS_CLIENT_ID as string,
  scopes: import.meta.env.VITE_APP_ORDERS_SCOPE as string,
};

// Admin Scope
export const API_ADMIN_SCOPE: ApiClientDetails = {
  clientSecret: import.meta.env.VITE_APP_ADMIN_CLIENT_SECRET as string,
  clientId: import.meta.env.VITE_APP_ADMIN_CLIENT_ID as string,
  scopes: import.meta.env.VITE_APP_ADMIN_SCOPE as string,
};

export const PROJECT_KEY: string = import.meta.env.VITE_APP_PROJECT_KEY as string;
export const REGION: string = import.meta.env.VITE_APP_REGION as string;
