import { Resource } from "sst";
import { Handler } from "aws-lambda";
import { Example } from "@monorepo-template/core/example";

export const handler: Handler = async (_event) => {
  return {
    statusCode: 200,
    body: `hello123.`,
  };
};
