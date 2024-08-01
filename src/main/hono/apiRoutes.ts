import { Hono } from 'hono';
import { Todo } from '../../domain';
import {
  DummyTodoStoreAdapter,
  SqLiteTodoStoreAdapter,
} from '../../adapters/output';
import { AddTodo } from '../../usecases';
import { CloudflareAddTodoAdapter } from '../../adapters/input';
import { PrismaClient } from '@prisma/client/edge';

const app = new Hono();

// dammy Todo store
const DummyTodoStore: Todo[] = [];
const dummyTodoStoreAdapter = new DummyTodoStoreAdapter(DummyTodoStore);
const addTodoUseCase = new AddTodo(dummyTodoStoreAdapter);

// sqlite Todo store
// const prisma = new PrismaClient();
// const sqliteTodoStoreAdapter = new SqLiteTodoStoreAdapter(prisma);
// const addTodoUseCase = new AddTodo(sqliteTodoStoreAdapter);

// /api/add-todo
app.route(
  '/add-todo',
  new CloudflareAddTodoAdapter(addTodoUseCase).getHandler()
);

export default app;
