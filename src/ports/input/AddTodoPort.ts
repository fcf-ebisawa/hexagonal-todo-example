import { AddTodoRequest, AddTodoResponse } from '../../domain';

/**
 * Interface representing a port for adding a todo item.
 */
export interface AddTodoPort {
  /**
   * Invokes the process of adding a new todo item.
   *
   * @param params - The parameters required to add a todo item.
   * @returns The response containing the updated list of todo items.
   */
  invoke(params: AddTodoRequest): AddTodoResponse;
}
