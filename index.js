const express = require('express') //express 모듈 가져오기
const app = express()
const port = 5000 //포트번호, 아무거나 사용 가능


//몽고DB 연결하기 
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://NaraeKim:a123456!@pjtboilerplate.98syp.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected...'))   
    .catch(err => console.log(err))  

    
app.get('/', (req, res) => {  res.send('Hello World!')})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//mongodb+srv://NaraeKim:<password>@pjtboilerplate.98syp.mongodb.net/?retryWrites=true&w=majority