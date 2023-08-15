import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

const main = async (event: APIGatewayProxyEvent, _context: Context) => {
  try {
    const { id } = event.pathParameters;
  } catch (error) {
    return formatJSONResponse({
      error: error.message,
    })
  }
};

export default main;
 