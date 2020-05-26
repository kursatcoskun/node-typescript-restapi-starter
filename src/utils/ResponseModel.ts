export class ResponseModel<T> {
  data: T;
  result: string;

  constructor(data: T, result: string) {
    this.data = data;
    this.result = result;
  }
}
