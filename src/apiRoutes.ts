import { Router } from 'express';
import { Todo } from './domain';
import { TodoStoreAdapter } from './adapters/output/TodoStoreAdapter';
import { AddTodo } from './usecases/AddTodo';
import { AddTodoAdapter } from './adapters/input/AddTodoAdapter';

const router = Router();

// dammy Todo store
const TodoStore: Todo[] = [];
// adapter for dammy Todo store
const todoStoreAdapter = new TodoStoreAdapter(TodoStore);
const addTodoUseCase = new AddTodo(todoStoreAdapter);

// /api/add-todo
router.post('/add-todo', new AddTodoAdapter(addTodoUseCase).getHandler());

export default router;
