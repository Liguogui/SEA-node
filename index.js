var express = require('express')
var app = express()

// /static/css/index2.css
app.get('/static/css/app.4d43240d208881469ffc0249d64c1e57.css',function (req,res) {
    res.sendFile(__dirname+'/static/css/app.4d43240d208881469ffc0249d64c1e57.css')
})
//js
app.get('/static/js/manifest.9a29538943d72bf6b6c5.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/manifest.9a29538943d72bf6b6c5.js')
})
app.get('/static/js/vendor.6a8923c78fa5e80e3cdf.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/vendor.6a8923c78fa5e80e3cdf.js')
})
app.get('/static/js/app.17f4e148d2b4a25171ab.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/app.17f4e148d2b4a25171ab.js')
})

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
