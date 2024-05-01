export const LOGIN_FORM_INPUTS = [
  {
    name: "username",
    type: "text",
  },
  {
    name: "password",
    type: "password",
  },
] as const;

export const REGISTER_FORM_INPUTS = [
  {
    name: "username",
    type: "text",
  },
  {
    name: "password",
    type: "password",
  },
  {
    name: "confirm password",
    type: "password",
  },
  {
    name: "email",
    type: "email",
  },
] as const;
