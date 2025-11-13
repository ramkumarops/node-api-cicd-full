import express from 'express';

const app = express();


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {

    res.send('Hello world');
});

app.get('/users', (req, res) => {

    res.send( [ {id:100 , name : 'John Doe' }, {id:101 , name : 'ram kumar' } ]);
});

export default app;