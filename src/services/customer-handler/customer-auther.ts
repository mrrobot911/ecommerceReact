import {
  createApiBuilderFromCtpClient,
  type CustomerSignInResult,
  type MyCustomerSignin,
} from '@commercetools/platform-sdk';

import { anonymousSessionFlowCtpClient } from '@/services/flows/anonymous';
import { loginUserCtpClient } from '@/services/flows/password';
import { PROJECT_KEY } from '@/services/helpers/api-client-details-setter';

export const loginAnonymousCustomer = async (request: MyCustomerSignin): Promise<CustomerSignInResult> => {
  const apiRoot = createApiBuilderFromCtpClient(anonymousSessionFlowCtpClient).withProjectKey({
    projectKey: PROJECT_KEY,
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

export const loginCustomer = async (request: MyCustomerSignin): Promise<CustomerSignInResult> => {
  const apiRoot = createApiBuilderFromCtpClient(loginUserCtpClient(request.email, request.password)).withProjectKey({
    projectKey: PROJECT_KEY,
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
