import { BaseAddress } from '@commercetools/platform-sdk';

export interface CustomerDraft {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  addresses: BaseAddress[];
  defaultShippingAddress: number;
  defaultBillingAddress: number;
}
