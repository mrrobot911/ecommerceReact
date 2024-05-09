import { ClientBuilder } from '@commercetools/sdk-client-v2';

import { API_ADMIN_SCOPE } from '@/services/helpers/api-client-details-setter';
import {
  authMiddlewareOptionsForRefreshTokenFlow,
  httpMiddlewareOptions,
} from '@/services/helpers/auth-middleware-options-setter';

export const refreshTokenFlowCtpClient = new ClientBuilder()
  .withRefreshTokenFlow(authMiddlewareOptionsForRefreshTokenFlow(API_ADMIN_SCOPE))
  .withHttpMiddleware(httpMiddlewareOptions())
  .withLoggerMiddleware()
  .build();
