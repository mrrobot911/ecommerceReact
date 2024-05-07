import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";

import { ctpClient } from "./BuildClient";

const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: import.meta.env.project_key,
});

const getProject = () => {
  return apiRoot.get().execute();
};

getProject().then(console.log).catch(console.error);
