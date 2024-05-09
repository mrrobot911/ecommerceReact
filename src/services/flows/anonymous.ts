import { ClientBuilder } from '@commercetools/sdk-client-v2';

import { API_ADMIN_SCOPE } from '@/services/helpers/api-client-details-setter';
import {
  authMiddlewareOptionsForAnonymousSessionFlow,
  httpMiddlewareOptions,
} from '@/services/helpers/auth-middleware-options-setter';

export const anonymousSessionFlowCtpClient = new ClientBuilder()
  .withAnonymousSessionFlow(authMiddlewareOptionsForAnonymousSessionFlow(API_ADMIN_SCOPE))
  .withHttpMiddleware(httpMiddlewareOptions())
  .withLoggerMiddleware()
  .build();
