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
] as const;
