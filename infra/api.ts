export const api = new sst.aws.ApiGatewayV2( "MyApi" );

api.route("GET /", {
  handler: "packages/functions/src/api.handler",
  runtime: "nodejs20.x",
});