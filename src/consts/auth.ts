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
  },
  {
    name: 'lastName',
    text: 'Last name',
    type: 'text',
    placeholder: '',
  },
  {
    name: 'password',
    text: 'Password',
    type: 'password',
    placeholder: '',
  },
  {
    name: 'confirmPassword',
    text: 'Confirm password',
    type: 'password',
    placeholder: '',
  },
  {
    name: 'email',
    text: 'Email',
    type: 'email',
    placeholder: '',
  },
  {
    name: 'shippingStreet',
    text: 'Shipping street',
    type: 'text',
    placeholder: '',
  },
  {
    name: 'shippingCity',
    text: 'Shipping city',
    type: 'text',
    placeholder: '',
  },
  {
    name: 'shippingPostalCode',
    text: 'Shipping postal code',
    type: 'text',
    placeholder: '',
  },
  {
    name: 'shippingCountry',
    text: 'Shipping country',
    type: 'text',
    placeholder: 'Choose...',
  },
  {
    name: 'billingStreet',
    text: 'Billing street',
    type: 'text',
    placeholder: '',
  },
  {
    name: 'billingCity',
    text: 'Billing city',
    type: 'text',
    placeholder: '',
  },
  {
    name: 'billingPostalCode',
    text: 'Billing postal code',
    type: 'text',
    placeholder: '',
  },
  {
    name: 'billingCountry',
    text: 'Billing country',
    type: 'text',
    placeholder: 'Choose...',
  },
] as const;
