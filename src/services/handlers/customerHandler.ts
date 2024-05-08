import { createApiBuilderFromCtpClient, CustomerSignInResult, MyCustomerSignin } from '@commercetools/platform-sdk';

import { projectKey } from '@/services/BuildClient';

import { anonymousSessionFlowCtpClient } from '../flow/withAnonymousSessionFlowClientBuilder';
import { loginUserCtpClient } from '../flow/withPasswordFlowClientBuilder';

export const loginAnonymousCustomer = (request: MyCustomerSignin): Promise<CustomerSignInResult> => {
  const apiRoot = createApiBuilderFromCtpClient(anonymousSessionFlowCtpClient).withProjectKey({
    projectKey,
  });

  return apiRoot
    .me()
    .login()
    .post({
      body: request,
    })
    .execute()
    .then(({ body }) => {
      return body;
    })
    .catch((error) => {
      return error;
    });
};

export const loginCustomer = (request: MyCustomerSignin): Promise<CustomerSignInResult> => {
  const apiRoot = createApiBuilderFromCtpClient(loginUserCtpClient(request.email, request.password)).withProjectKey({
    projectKey,
  });

  return apiRoot
    .me()
    .login()
    .post({
      body: request,
    })
    .execute()
    .then(({ body }) => {
      return body;
    })
    .catch((error) => {
      return error;
    });
};
