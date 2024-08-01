import express from 'express';
import apiRoutes from './apiRoutes';

const app = express();
const router = express.Router();

// use json parser
app.use(express.json());
app.use(router);

router.use('/api', apiRoutes);

export { app as viteNodeApp };
