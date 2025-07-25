import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import seedAdminData from './dummy/admin.js';

import CreateModel from './models/ModelWaterQuality.js';

// Functions
import db from './configs/Database.js';
import RouteAuth from './routers/RouteAuth.js';
import RouteWaterQuality from './routers/RouteWaterQuality.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

try {
  await db.authenticate();
  console.log('Database connected');
  //   await CreateModel.sync({ alter: true });
  await seedAdminData();
} catch (error) {
  console.log(error);
}

// End Point Api
app.use('/auth', RouteAuth);
app.use('/water-quality', RouteWaterQuality);

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'welcome to my app' });
});

app.listen(2025, () => {
  console.log('running server at port 2025....');
});
