import express from 'express';
import connectToDatabase from './helpers.mjs';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

await connectToDatabase(); 
app.listen(3000, () => console.log('Server running on port 3000'));
