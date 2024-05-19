import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json())

let storedData = {};

app.get('/data', (req, res) => {
  res.json({ data: storedData});
});

app.post('/send', (req, res) => {
    storedData = req.body;
    res.json({ message: `Data received and stored ${storedData}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});