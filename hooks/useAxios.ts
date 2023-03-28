import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

console.log(
  `process.env.NEXT_PUBLIC_API_URL=${process.env.NEXT_PUBLIC_API_URL}`
);
export interface ApiResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

interface ApiResponse<T> {
  status: boolean;
  data: T;
}

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const useApi = <T>(
  endpoint: string,
  options?: AxiosRequestConfig
): ApiResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await api.get<ApiResponse<T>>(endpoint, options);
        if (response.data.status) {
          setData(response.data.data);
        } else {
          setError(new Error("API request failed"));
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        }
      }
      setIsLoading(false);
    };
    fetchData();
  }, [endpoint, options]);

  return { data, isLoading, error };
};

export default useApi;
