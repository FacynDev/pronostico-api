import express from 'express';
const app = express();
import cors from 'cors';

import weatherRoute from './routes/weather.routes.js';

app.use(cors({
    origin: process.env.ORIGINAL_URL,
    credentials: true
}));
app.use(express.json())

// Rutas
app.use('/api/weather', weatherRoute);

app.listen(3000, () => {
    console.log('APP listen on port 3000')
})



