export const LOGIN_FORM_INPUTS = [
  {
    name: 'email',
    text: 'Email',
    type: 'email',
  },
  {
    name: 'password',
    text: 'Password',
    type: 'password',
  },
] as const;

export const REGISTER_FORM_INPUTS = [
  {
    name: 'firstName',
    text: 'First name',
    type: 'text',
    placeholder: '',
    style: 'main',
  },
  {
    name: 'lastName',
    text: 'Last name',
    type: 'text',
    placeholder: '',
    style: 'main',
  },
  {
    name: 'password',
    text: 'Password',
    type: 'password',
    placeholder: '',
    style: 'main',
  },
  {
    name: 'confirmPassword',
    text: 'Confirm password',
    type: 'password',
    placeholder: '',
    style: 'main',
  },
  {
    name: 'email',
    text: 'Email',
    type: 'email',
    placeholder: '',
    style: 'main',
  },
  {
    name: 'shippingStreet',
    text: 'Shipping street',
    type: 'text',
    placeholder: '',
    style: 'shipping',
  },
  {
    name: 'shippingCity',
    text: 'Shipping city',
    type: 'text',
    placeholder: '',
    style: 'shipping',
  },
  {
    name: 'shippingPostalCode',
    text: 'Shipping postal code',
    type: 'text',
    placeholder: '',
    style: 'shipping',
  },
  {
    name: 'shippingCountry',
    text: 'Shipping country',
    type: 'text',
    placeholder: 'Choose...',
    style: 'shipping',
  },
  {
    name: 'billingStreet',
    text: 'Billing street',
    type: 'text',
    placeholder: '',
    style: 'billing',
  },
  {
    name: 'billingCity',
    text: 'Billing city',
    type: 'text',
    placeholder: '',
    style: 'billing',
  },
  {
    name: 'billingPostalCode',
    text: 'Billing postal code',
    type: 'text',
    placeholder: '',
    style: 'billing',
  },
  {
    name: 'billingCountry',
    text: 'Billing country',
    type: 'text',
    placeholder: 'Choose...',
    style: 'billing',
  },
] as const;
