const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect to DB
connectDB();

//initialize the middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Runnning'));

//Define routes
app
  .use('/api/users', require('./routes/api/users'))
  .use('/api/posts', require('./routes/api/posts'))
  .use('/api/profile', require('./routes/api/profile'))
  .use('/api/auth', require('./routes/api/auth'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
