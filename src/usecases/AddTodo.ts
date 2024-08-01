import { AddTodoRequest, AddTodoResponse, Todo } from '../domain';
import { AddTodoPort } from '../ports/input';
import { TodoStorePort } from '../ports/output';
import { v4 as uuid } from 'uuid';

/**
 * Class implementing the AddTodoPort interface to add new Todo items.
 */
export class AddTodo implements AddTodoPort {
  /**
   * Constructs an instance of AddTodo.
   *
   * @param store - The Todo store port for saving Todo items.
   */
  constructor(private store: TodoStorePort) {}

  /**
   * Invokes the add todo operation.
   *
   * @param params - The request parameters for adding a new Todo.
   * @returns The response containing the updated list of Todo items.
   */
  invoke(params: AddTodoRequest): AddTodoResponse {
    const { title, description } = params;
    if (!title) {
      throw new Error('title is required.');
    }
    const newTodo: Todo = {
      id: uuid(),
      title,
      description,
      status: 'Not yet',
    };
    const todoList = this.store.save(newTodo);
    return { todo_list: todoList };
  }
}
