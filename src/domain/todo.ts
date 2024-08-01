/**
 * Type representing the status of a todo item.
 */
export type Status = 'Not yet' | 'In progress' | 'Done';

/**
 * Interface representing a todo item.
 */
export interface Todo {
  /**
   * The unique identifier for the todo item.
   */
  id: string;

  /**
   * The title of the todo item.
   */
  title: string;

  /**
   * The description of the todo item. This field is optional.
   */
  description?: string;

  /**
   * The current status of the todo item.
   */
  status: Status;
}
