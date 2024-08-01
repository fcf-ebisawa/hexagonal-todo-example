import { Todo } from '../../domain';
import { TodoStorePort } from '../../ports/output';

/**
 * Adapter class to handle Todo storage operations.
 */
export class TodoStoreAdapter implements TodoStorePort {
  /**
   * Constructs an instance of TodoStoreAdapter.
   *
   * @param store - The initial array of Todo items.
   */
  constructor(private store: Todo[]) {}

  /**
   * Saves a Todo item and returns an array of all saved Todo items.
   *
   * @param todo - The Todo item to be saved.
   * @returns An array of all saved Todo items.
   */
  save(todo: Todo): Todo[] {
    this.store.push(todo);
    return this.store;
  }
}
