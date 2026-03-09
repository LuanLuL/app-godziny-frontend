export interface IParams {
  [key: string]: any;
}

export interface IApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}