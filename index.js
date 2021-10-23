const express = require('express');
const cors = require ('cors');
const app = express();

app.use(cors()); // This is called "Middleware"
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello, I am learning node! This is practice project! This is the fifth attempt for the first time');
});

const users = [
    {
        id: 1,
        name: "Sabana",
        email: "sabana@gmail.com",
        phone: "01722222222"
    },
    {
        id: 2,
        name: "Sabnur",
        email: "sabnur@gmail.com",
        phone: "01733333333"
    },
    {
        id: 3,
        name: "Srabonti",
        email: "srabonti@gmail.com",
        phone: "01744444444"
    },
    {
        id: 4,
        name: "Suchorita",
        email: "suchorita0@gmail.com",
        phone: "01755555555"
    },
    {
        id: 5,
        name: "Soniya",
        email: "soniya@gmail.com",
        phone: "01766666666"
    },
    {
        id: 6,
        name: "Susmita",
        email: "susmita@gmail.com",
        phone: "01777777777"
    }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // user query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

// app.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

// dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})