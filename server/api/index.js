import express from 'express';
import cors from 'cors';
import eventRouter from './routes/eventRouter.js';
import userRouter from './routes/userRouter.js';
import memberRouter from './routes/memberRouter.js';
import connection from './connection/db.js';


const PORT = 3000;

const app = express();
app.use(express.json());


app.use(cors()); // Use CORS middleware
connection();

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use('/api/user', userRouter);
app.use('/api/event', eventRouter);
app.use('/member', memberRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});