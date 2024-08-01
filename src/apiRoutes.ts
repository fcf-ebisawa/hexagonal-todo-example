import { Router } from 'express';
import { Todo } from './domain';
import { DummyTodoStoreAdapter } from './adapters/output';
import { AddTodo } from './usecases/AddTodo';
import { AddTodoAdapter } from './adapters/input/AddTodoAdapter';

const router = Router();

// dammy Todo store
const DummyTodoStore: Todo[] = [];
// adapter for dammy Todo store
const todoStoreAdapter = new DummyTodoStoreAdapter(DummyTodoStore);
const addTodoUseCase = new AddTodo(todoStoreAdapter);

// /api/add-todo
router.post('/add-todo', new AddTodoAdapter(addTodoUseCase).getHandler());

export default router;
