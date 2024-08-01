import { Todo } from './todo';

/**
 * Interface representing a request to add a new todo item.
 */
export interface AddTodoRequest {
  /**
   * The title of the todo item.
   */
  title: string;

  /**
   * The description of the todo item. This field is optional.
   */
  description?: string;
}

/**
 * Interface representing the response after adding a new todo item.
 */
export interface AddTodoResponse {
  /**
   * The list of todo items.
   */
  todo_list: Todo[];
}
