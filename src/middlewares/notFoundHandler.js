// import { HttpError } from 'http-errors';

export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    message: 'Contact not found',
  });
};