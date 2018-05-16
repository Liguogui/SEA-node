var express = require('express')
var app = express()

// /static/css/index2.css
app.get('/static/css/app.1cfde8937d2164607a8298220f775d88.css',function (req,res) {
    res.sendFile(__dirname+'/static/css/app.1cfde8937d2164607a8298220f775d88.css')
})
//js
app.get('/static/js/manifest.07f010b62ab8fbf94acc.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/manifest.07f010b62ab8fbf94acc.js')
})
app.get('/static/js/vendor.e45463390e8519f52d89.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/vendor.e45463390e8519f52d89.js')
})
app.get('/static/js/app.73383a5523c3980f283b.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/app.73383a5523c3980f283b.js')
})
//js组件爆炸



app.get('/',function (req,res) {
    res.sendFile(__dirname+'/index.html')
})


var port = process.env.PORT || 5050;

//app.listen(process.env.PORT || 5050)

module.exports = app.listen(port,function (err) {
    if(err){
        console.log(err);
    }
    console.log('Listening.....');
});
