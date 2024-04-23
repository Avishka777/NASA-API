import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();

app.listen(3000, () => {
  console.log('Server Is Running On Port 3000 !');
});

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});