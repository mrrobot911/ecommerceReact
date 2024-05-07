import {
  type AuthMiddlewareOptions,
  ClientBuilder,
  type HttpMiddlewareOptions,
} from "@commercetools/sdk-client-v2";
import fetch from "node-fetch";

const projectKey = import.meta.env.project_key;
const scopes = [import.meta.env.scope];

const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: `https://auth.${import.meta.env.region}.commercetools.com`,
  projectKey,
  credentials: {
    clientId: import.meta.env.client_id,
    clientSecret: import.meta.env.secret,
  },
  scopes,
  fetch,
};

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `https://api.${import.meta.env.region}.commercetools.com`,
  fetch,
};

export const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();
