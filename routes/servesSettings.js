import { Router } from 'express';
import { register } from '../controller/servesSettings.js';

const app = Router();

app.get('/register', register);

export { app as servesSettingsRouter };