import { ClientBuilder } from '@commercetools/sdk-client-v2';

import { authMiddlewareOptionsForPasswordFlow, httpMiddlewareOptions } from '../BuildClient';

export const loginUserCtpClient = (username: string, password: string) => {
  const ctpClient = new ClientBuilder()
    .withPasswordFlow(authMiddlewareOptionsForPasswordFlow(username, password))
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware()
    .build();

  return ctpClient;
};
