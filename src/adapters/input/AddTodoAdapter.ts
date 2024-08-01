import { RequestHandler } from 'express';
import { AddTodoRequest } from '../../domain';
import { AddTodoPort } from '../../ports/input';

/**
 * Adapter class to handle HTTP requests for adding Todo items.
 */
export class AddTodoAdapter {
  /**
   * Constructs an instance of AddTodoAdapter.
   *
   * @param usecase - The use case for adding a Todo item.
   */
  constructor(private usecase: AddTodoPort) {}

  /**
   * Returns an Express request handler for adding a Todo item.
   *
   * @returns The request handler.
   */
  getHandler(): RequestHandler {
    return (req, res, next) => {
      try {
        const params = req.body as AddTodoRequest;
        if (!params.title) {
          res.status(400).send('title is required.');
          next();
          return;
        }

        const response = this.usecase.invoke(params);
        res.status(201).json(response);
        next();
      } catch (e) {
        console.error(e.message);
        res.status(500).send('failed to register.');
        next();
      }
    };
  }
}
