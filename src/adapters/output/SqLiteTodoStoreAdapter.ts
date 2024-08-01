import { Todo } from '../../domain';
import { TodoStorePort } from '../../ports/output';
import { PrismaClient } from '@prisma/client';

/**
 * Adapter class to handle Todo storage operations.
 */
export class SqLiteTodoStoreAdapter implements TodoStorePort {
  /**
   * Constructs an instance of SqLiteTodoStoreAdapter.
   *
   * @param store - The prisma client.
   */
  constructor(private store: PrismaClient) {}

  /**
   * Saves a Todo item and returns an array of all saved Todo items.
   *
   * @param todo - The Todo item to be saved.
   * @returns An array of all saved Todo items.
   */
  async save(todo: Todo): Promise<Todo[]> {
    await this.store.todo.create({
      data: todo,
    });

    return (await this.store.todo.findMany()) as Todo[];
  }
}
