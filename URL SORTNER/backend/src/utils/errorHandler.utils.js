export const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      msg: err.message,
      success: false,
    });
  } else {
    console.log(err);
    res.status(500).json({
      msg: err.message || "Internal server error",
      success: false,
    });
  }
};

export class AppError extends Error {
  statusCode;
  isOperational;
  constructor(message, statusCode = 500, isOperational = true) {
    super(message);
    this.isOperational = isOperational;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.message);
  }
}
export class NotFoundError extends AppError {
  constructor(message = "resource not found") {
    super(message, 404);
  }
}
export class ConflictError extends AppError {
  constructor(message = "conflict occured") {
    super(message, 409);
  }
}
export class BadRequestError extends AppError {
  constructor(message = "Bad Request") {
    super(message, 400);
  }
}
export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}
