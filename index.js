var express = require('express')
var app = express()

app.get('/',function (req,res) {
    res.sendFile(__dirname+'/index2.html')
})

var port = process.env.PORT || 5050;

//app.listen(process.env.PORT || 5050)

module.exports = app.listen(port,function (err) {
    if(err){
        console.log(err);
    }
    console.log('Listening.....');
});
