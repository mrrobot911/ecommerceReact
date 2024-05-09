export const LOGIN_FORM_INPUTS = [
  {
    name: 'email',
    type: 'email',
  },
  {
    name: 'password',
    type: 'password',
  },
] as const;

export const REGISTER_FORM_INPUTS = [
  {
    name: 'firstName',
    type: 'text',
  },
  {
    name: 'lastName',
    type: 'text',
  },
  {
    name: 'password',
    type: 'password',
  },
  {
    name: 'confirm password',
    type: 'password',
  },
  {
    name: 'email',
    type: 'email',
  },
  {
    name: 'shippingStreet',
    type: 'text',
  },
  {
    name: 'shippingCity',
    type: 'text',
  },
  {
    name: 'shippingPostalCode',
    type: 'text',
  },
  {
    name: 'shippingCountry',
    type: 'text',
    placeholder: 'Choose...',
  },
  {
    name: 'billingStreet',
    type: 'text',
  },
  {
    name: 'billingCity',
    type: 'text',
  },
  {
    name: 'billingPostalCode',
    type: 'text',
  },
  {
    name: 'billingCountry',
    type: 'text',
    placeholder: 'Choose...',
  },
] as const;
