import { useCallback, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

type UseAxiosRequestResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  makeRequest: (config: AxiosRequestConfig) => Promise<void>;
};

export const useAxiosRequest = <T,>(): UseAxiosRequestResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const makeRequest = useCallback(async (config: AxiosRequestConfig): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.request<T>(config);

      if (response.status === 200) {
        setData(response.data);
      } else {
        setError(`Unexpected response status: ${response.status}`);
        console.error('Unexpected response structure or status code:', response);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(`Axios error: ${error.message}`);
        if (error.response) {
          console.error('Server responded with status:', error.response.status);
        }
      } else {
        setError('An unexpected error occurred.');
        console.error('An unexpected error occurred:', error);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, error, makeRequest };
};
