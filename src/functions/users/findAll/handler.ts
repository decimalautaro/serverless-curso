import { formatJSONResponse } from '@libs/api-gateway';


const main = async () => {
  try {
    
  } catch (error) {
    return formatJSONResponse({
      error: error.message,
    })
  }
};

export default main ;
