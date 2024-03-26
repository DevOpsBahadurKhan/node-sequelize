const express = require('express');
const cors = require('cors');
const path = require('path'); // Import the 'path' module
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
const errorHandler = require('./middleware/errorHandler');


// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// errorHandler
app.use(errorHandler);



app.listen(PORT, () => console.log(`Listening...`));