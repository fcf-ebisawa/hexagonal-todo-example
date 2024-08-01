import { Todo } from '../../domain';

/**
 * Interface representing a port for a Todo store.
 */
export interface TodoStorePort {
  /**
   * Saves a Todo item and returns an array of all saved Todo items.
   *
   * @param todo - The Todo item to be saved.
   * @returns An array of all saved Todo items.
   */
  save(todo: Todo): Todo[] | Promise<Todo[]>;
}
