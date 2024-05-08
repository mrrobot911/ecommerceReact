import { ClientBuilder } from '@commercetools/sdk-client-v2';

import { authMiddlewareOptions, httpMiddlewareOptions } from '../BuildClient';

export const anonymousSessionFlowCtpClient = new ClientBuilder()
  .withAnonymousSessionFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();
