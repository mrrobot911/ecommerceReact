import {
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
  type PasswordAuthMiddlewareOptions,
  type TokenStore,
} from '@commercetools/sdk-client-v2';
import fetch from 'node-fetch';

export const projectKey = import.meta.env.VITE_PROJECT_KEY || '';
const scopes = [import.meta.env.VITE_SCOPE];
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SECRET;

export const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: `https://auth.${import.meta.env.VITE_REGION}.commercetools.com`,
  projectKey,
  credentials: {
    clientId,
    clientSecret,
  },
  scopes,
  fetch,
};

export const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `https://api.${import.meta.env.VITE_REGION}.commercetools.com`,
  fetch,
};

export const authMiddlewareOptionsForPasswordFlow = (
  username: string,
  password: string,
): PasswordAuthMiddlewareOptions => {
  return {
    host: `https://auth.${import.meta.env.VITE_REGION}.commercetools.com`,
    projectKey,
    credentials: {
      clientId,
      clientSecret,
      user: {
        username,
        password,
      },
    },
    tokenCache: {
      get: (): TokenStore => {
        const token = JSON.parse(localStorage.getItem('custTokenDevision') as string);
        return token;
      },
      set: (token: TokenStore) => {
        localStorage.setItem('custTokenDevision', JSON.stringify(token));
      },
    },
    scopes,
    fetch,
  };
};
