import { Router } from 'express';
import { Todo } from '../../domain';
import {
  DummyTodoStoreAdapter,
  SqLiteTodoStoreAdapter,
} from '../../adapters/output';
import { AddTodo } from '../../usecases';
import { ExpressAddTodoAdapter } from '../../adapters/input';
import { PrismaClient } from '@prisma/client';

const router = Router();

// dammy Todo store
const DummyTodoStore: Todo[] = [];
const dummyTodoStoreAdapter = new DummyTodoStoreAdapter(DummyTodoStore);
const addTodoUseCase = new AddTodo(dummyTodoStoreAdapter);

// sqlite Todo store
// const prisma = new PrismaClient();
// const sqliteTodoStoreAdapter = new SqLiteTodoStoreAdapter(prisma);
// const addTodoUseCase = new AddTodo(sqliteTodoStoreAdapter);

// /api/add-todo
router.post(
  '/add-todo',
  new ExpressAddTodoAdapter(addTodoUseCase).getHandler()
);

export default router;
