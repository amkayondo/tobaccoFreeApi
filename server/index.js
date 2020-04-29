import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyparser from "body-parser";
import UserRouter from './routes/UserRouter';

dotenv.config();

const app = express();
const bodyParser = bodyparser.json();
app.use(bodyParser);
app.use(express.json({ limit: '10kb' }));

app.use(express.urlencoded());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'welcome to tobacco free api',
  });
});

app.use(UserRouter);

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
