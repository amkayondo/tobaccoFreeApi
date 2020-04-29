export default class Response {
  constructor() {
    this.errorMessage = (res, statusCode, error) => res.status(statusCode).json(
      ({
        status: statusCode,
        error,
      }),
    );

    this.successUser = (res, statusCode, message, token) => res.status(statusCode).json(
      ({
        status: statusCode,
        message,
        data: {
          token,
        },
      }),
    );

    this.successData = (res, statusCode, message, data) => res.status(statusCode).json(
      ({
        status: statusCode,
        message,
        data,
      }),
    );

    this.successWithNoData = (res, statusCode, message) => res.status(statusCode).json(
      ({
        status: statusCode,
        message,
      }),
    );
  }
}
