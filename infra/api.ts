export const api = new sst.aws.ApiGatewayV2( "MyApi" );

api.route("GET /notes", {
  handler: "packages/functions/src/create.handler",
  runtime: "nodejs20.x",
});