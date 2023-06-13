const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/user/:id', function (req, res) {
    const q = req.query
    console.log(q)
    // get함수에서 변수 사용할려고 하면 query, params가 있음.
    res.send({'userid':q.q,'userage':q.age})
})

app.get('/sound/:name', function (req, res) {
    const { name } = req.params
    if (name == 'dog'){
        res.json({'sound':'멍멍'})
    } else if(name == 'cat'){
        res.json({'sound':'야옹','img':'https://cdn.newspenguin.com/news/photo/202101/3899_12249_529.jpg'})
    } else if(name == 'pig'){
        res.json({'sound':'꿀꿀'})
    } else {
        res.json({'sound': '알 수 없음'})
    }
})

app.listen(3000)