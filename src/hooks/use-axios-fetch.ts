import { useState } from "react";

import axios from "axios";

import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const useAxiosFetch = <T>(
    params: AxiosRequestConfig
): [T | null, AxiosError | string | null, boolean, () => Promise<void>] => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  const fetchData = async (): Promise<void> => {
    try {
      const response: AxiosResponse<T> = await axios.request(params);
      setData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError("Axios Error with Message: " + error.message);
      } else {
        setError(error);
      }
      
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  
  // useEffect(() => {
  //   fetchData();
  // }, []);
  
  return [data, error, loading, fetchData];
};
