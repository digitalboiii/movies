import axios from 'axios';
import { handleHTTPStatus } from 'utils/index';

export const getRequest = async (apiUrl, options) => {
  try {
    const response = await axios.get(apiUrl, options);
    if (response.status >= 400) {
      handleHTTPStatus(response.status);
    }
    return response;
  } catch (err) {
    console.error(err);
  }
};
