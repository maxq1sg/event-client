export interface IError {
  message: string;
  body: ValidationError[] | null;
}

export interface ValidationError {
  msg: string;
  param: string;
}
