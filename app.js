// const express = require('express');
// const helmet = require("helmet");
// const ejs = require("ejs");
// const app = express();


// app.set('view engin', 'ejs');
// app.set('views', './views');
// app.use('/public', express.static(__dirname+'/public'));


// app.use(helmet());
// app.use(express.json());
// app.use(express.urlencoded());

// const mainRouter = require('./router/mainRouter.js');
// app.use('/', mainRouter);

// app.listen(3000,function(req,res){
//     console.log("Example app listening on Port 3000.")
// }) 




//express 도구를 불러오는 부분
//도구를 불러와 변수에 담아 사용합니다.

const express = require('express');
const helmet = require("helmet");
const ejs = require("ejs");

//결국 express도 많은 기능을 담고 있는 자바스크립트 함수로 볼 수 있으므로
//express 함수가 반환하는 서버 기능들을 다시 app에 담아 사용합니다.

const app = express();


app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/public', express.static(__dirname + '/public'));

app.use(helmet());

//분리한 라우터(주소)들을 한 곳에 가져옵니다.

const mainRouter = require('./router/mainRouter.js')
app.use('/', mainRouter)



//서버를 켜는 코드입니다.
//3000은 컴퓨터의 몇 번방을 사용할 것인지, 즉 포트에 대한 설정을 하는 부분입니다.

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});