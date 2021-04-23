import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import { playersRouter } from './routes/players.js'

dotenv.config();

const app = express();
app.use(express.json());

app.use('/players', playersRouter);

mongoose.connect(
  process.env.DBURI,
  { useNewUrlParser: true, useUnifiedTopology: true }
).catch((err) => console.log('Erro ao tentar conectar: ' + err));

app.listen(process.env.PORT, () => console.log('API Iniciada!'));