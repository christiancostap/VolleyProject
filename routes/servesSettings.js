import express from 'express';
import { register } from '../controller/servesSettings.js';

const app = express();

app.get('/', register);

export { app as servesSettingsRouter };