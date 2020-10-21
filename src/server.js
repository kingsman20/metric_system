import app from './app';

const port = parseInt(process.env.PORT, 10) || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
