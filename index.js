// bai tap 1
const express = require('express')
const app = express();
const port = 8000;

const data =[
    {id:1, name:"book 1", image:"none", page:"7"},
    {id:2, name:"book 2", image:"none", page:"7"},
    {id:3, name:"book 3", image:"none", page:"7"},
];

app.get('/', (req, res) => {
    res.send("first app")
});

app.get('/book', (req, res) => {
    res.send(data)
});

app.get("/book/:id", (req, res) => {
    const id = req.params.id;
    const kq = data.filter(item => {
        if(item.id == id) return true;
    })
    res.send(kq)
});

app.listen(port)