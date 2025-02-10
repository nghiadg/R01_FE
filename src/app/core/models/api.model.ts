import { HttpErrorResponse } from '@angular/common/http';

export interface IAPIResponse<TData = unknown> {
  status: number;
  message: string;
  data: TData;
  error?: IAPIError[];
}

export interface IAPIError {
  code: string;
  message: string;
  field: string;
}

export interface IHttpErrorResponse extends HttpErrorResponse {
  error: IAPIResponse;
}
