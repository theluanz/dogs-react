import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setIsLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (!response.ok) {
        throw new Error(json.message || 'Something went wrong');
      }
    } catch (error) {
      json = null;
      setError(error.message);
    } finally {
      setData(json);
      setIsLoading(false);
      return { response, json };
    }
  }, []);

  return {
    data,
    error,
    isLoading,
    request,
  };
};

export default useFetch;
