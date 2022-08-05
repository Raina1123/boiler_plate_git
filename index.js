const express = require('express') //express 모듈 가져오기
const app = express()
const port = 5000 //포트번호, 아무거나 사용 가능
const bodyParser = require('body-parser') //bodyparser 모듈 가져오기
const {User} = require("./models/User")

const config = require('./config/key');

//body-parser 옵션
//1. application/x-www-form-urlencoded 를 분석해서 가져옴
app.use(bodyParser.urlencoded({extended: true}));
//2. application/json 을 분석해서 가져옴
app.use(bodyParser.json());

//몽고DB 연결하기 
const mongoose = require('mongoose')

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,  useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected...'))   
    .catch(err => console.log(err))  

    
app.get('/', (req, res) => {  res.send('Hello World! This is my home!!wow!!!')})




//client 에서 보내주는 정보 받는 라우터
app.post('/register',(req, res)=>{
  //회원가입 시 필요한 정보를 cli에서 가져오면 DB에 넣어준다.
  
  //bodyParser를 이용해서 req.body에 데이터를 넣어줌 
  const user = new User(req.body)
  user.save((err, userInfo)=>{   //몽고DB에 저장 
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })

})

app.listen(port, () => { console.log(`Example app listening on port ${port}`)})

//mongodb+srv://NaraeKim:<password>@pjtboilerplate.98syp.mongodb.net/?retryWrites=true&w=majority