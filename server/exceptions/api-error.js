export default class ApiError extends Error {
  status;
  errors;

  constructor(status, message, errors = [], success = false) {
      super(message);
      this.status = status;
      this.errors = errors;
      this.success = success;
  }

  static UnauthorizedError() {
      return new ApiError(401, 'Пользователь не авторизован')
  }

  static BadRequest(message, errors = [], success) {
      return new ApiError(400, message, errors, success);
  }
}