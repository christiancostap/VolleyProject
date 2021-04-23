import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import { playersRouter } from './routes/players.js'
import { servesSettingsRouter } from './routes/servesSettings.js';
import { servesRouter } from './controller/serves.js';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(
  process.env.DBURI,
  { useNewUrlParser: true, useUnifiedTopology: true }
).catch((err) => console.log('Erro ao tentar conectar: ' + err));

app.use('/players', playersRouter);
app.use('/serves-settings', servesSettingsRouter);
app.use('/serves', servesRouter);

app.listen(process.env.PORT, () => console.log('API Iniciada!'));