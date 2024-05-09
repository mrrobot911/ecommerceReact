import { ClientBuilder } from '@commercetools/sdk-client-v2';

import { API_MANAGE_PROFILE_SCOPE } from '@/services/helpers/api-client-details-setter';
import {
  authMiddlewareOptionsForPasswordFlow,
  httpMiddlewareOptions,
} from '@/services/helpers/auth-middleware-options-setter';

export const loginUserCtpClient = (username: string, password: string) => {
  const ctpClient = new ClientBuilder()
    .withPasswordFlow(authMiddlewareOptionsForPasswordFlow(API_MANAGE_PROFILE_SCOPE, username, password))
    .withHttpMiddleware(httpMiddlewareOptions())
    .withLoggerMiddleware()
    .build();

  return ctpClient;
};
