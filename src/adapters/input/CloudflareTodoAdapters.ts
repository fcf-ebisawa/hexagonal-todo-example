import { AddTodoRequest } from '../../domain';
import { AddTodoPort } from '../../ports/input';
import { Hono } from 'hono';

/**
 * Adapter class to handle HTTP requests for adding Todo items.
 */
export class CloudflareAddTodoAdapter {
  /**
   * Constructs an instance of CloudflareAddTodoAdapter.
   *
   * @param usecase - The use case for adding a Todo item.
   */
  constructor(private usecase: AddTodoPort) {}

  /**
   * Returns a Hono request handler for adding a Todo item.
   *
   * @returns The Hono app.
   */
  getHandler(): Hono {
    return new Hono().post(async (c) => {
      try {
        const params = (await c.req.json()) as AddTodoRequest;
        if (!params.title) {
          return c.text('title is required.', 400);
        }
        const response = await this.usecase.invoke(params);
        return c.json(response, 201);
      } catch (e) {
        console.error(e.message);
        return c.text('failed to register.', 500);
      }
    });
  }
}
