import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { Context } from 'vm';

const hello = async (event: APIGatewayProxyEvent, context: Context) => {
  const {name} = JSON.parse(event.body) as {name: string};
  const {awsRequestId} = context;
  return formatJSONResponse({
    message: `Hello ${name}, welcome to the exciting Serverless world!`,
    awsRequestId,
  });
};

export const main = hello;
