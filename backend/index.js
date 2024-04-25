import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const app = express();

const __dirname = path.resolve();

app.listen(3000, () => {
  console.log('Server Is Running On Port 3000 !');
});

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB Is Connected');
  })
  .catch((err) => {
    console.log(err);
  });

