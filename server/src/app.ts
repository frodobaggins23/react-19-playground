import express from 'express';
import { setRoutes } from './routes/index';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Set up routes
setRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
