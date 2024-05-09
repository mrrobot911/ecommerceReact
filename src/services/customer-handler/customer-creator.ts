import { createApiBuilderFromCtpClient, type CustomerSignInResult } from '@commercetools/platform-sdk';

import { PROJECT_KEY } from '@/services/helpers/api-client-details-setter';
import { CustomerDraft } from '@/types/customer';

import { manageCustomersCtpClient } from '../flows/credentials';

export const createCustomer = async (customerDetails: CustomerDraft): Promise<CustomerSignInResult> => {
  const apiRoot = createApiBuilderFromCtpClient(manageCustomersCtpClient).withProjectKey({
    projectKey: PROJECT_KEY,
  });

  const data = apiRoot
    .customers()
    .post({
      body: customerDetails,
    })
    .execute()
    .then(({ body }) => {
      return body;
    })
    .catch((error) => {
      throw error;
    });

  return data;
};
