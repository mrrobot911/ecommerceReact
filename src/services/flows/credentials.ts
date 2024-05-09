import { ClientBuilder } from '@commercetools/sdk-client-v2';

import {
  API_ADMIN_SCOPE,
  API_MANAGE_PROFILE_SCOPE,
  API_VIEW_CUSTOMERS_SCOPE,
} from '@/services/helpers/api-client-details-setter';
import {
  authMiddlewareOptionsForClientCredentialsFlow,
  httpMiddlewareOptions,
} from '@/services/helpers/auth-middleware-options-setter';

export const viewCustomersCtpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptionsForClientCredentialsFlow(API_VIEW_CUSTOMERS_SCOPE))
  .withHttpMiddleware(httpMiddlewareOptions())
  .withLoggerMiddleware()
  .build();

export const manageCustomersCtpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptionsForClientCredentialsFlow(API_MANAGE_PROFILE_SCOPE))
  .withHttpMiddleware(httpMiddlewareOptions())
  .withLoggerMiddleware()
  .build();

export const searchProductsCtpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptionsForClientCredentialsFlow(API_ADMIN_SCOPE))
  .withHttpMiddleware(httpMiddlewareOptions())
  .withLoggerMiddleware()
  .build();

export const getSetCustomers = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptionsForClientCredentialsFlow(API_ADMIN_SCOPE))
  .withHttpMiddleware(httpMiddlewareOptions())
  .withLoggerMiddleware()
  .build();
