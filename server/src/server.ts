import express from 'express';

const app = express ();

app.get('/users', (request, response) => {
    const users = [
        {name: 'Gabriel', age: 19},
    ]

    return response.json(users)
})

app.listen(3000);