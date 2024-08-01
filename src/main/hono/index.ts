import { Hono } from 'hono';
import apiRoutes from './apiRoutes';

const app = new Hono();

app.route('/api', apiRoutes);

export default app;
