require('dotenv').config();
import process from 'process';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 9999;

app.use(bodyParser.json());
app.use(cors());
app.get('/api/v1/health', (req, res) => res.status(200).json({ message: 'OK' }));

(async () => {
  try {
    app.listen(PORT, async () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
})();