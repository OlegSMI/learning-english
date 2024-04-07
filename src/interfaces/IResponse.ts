export enum ResponseTypeEnum {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning",
}

export interface IResponse<T> {
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
  data: T;
}
