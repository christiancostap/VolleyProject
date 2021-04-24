import { Router } from 'express';
import { getRecords, register } from '../controller/servesSettings.js';

const app = Router();

app.post('/register', register);
app.get('/get-records', getRecords);

export { app as servesSettingsRouter };