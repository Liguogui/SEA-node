var express = require('express')
const bodyParser = require('body-parser')
var axios = require('axios');

var app = express()

// /static/css/index2.css
app.get('/static/css/app.9c7becaa3c99a4871d2abfedac5f5f3e.css',function (req,res) {
    res.sendFile(__dirname+'/static/css/app.9c7becaa3c99a4871d2abfedac5f5f3e.css')
})
//js
app.get('/static/js/manifest.849065adc11d570d2c75.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/manifest.849065adc11d570d2c75.js')
})
app.get('/static/js/vendor.962ccc248fa9f8b5e3a8.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/vendor.962ccc248fa9f8b5e3a8.js')
})
app.get('/static/js/app.496d6c330b60f512baaa.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/app.496d6c330b60f512baaa.js')
})
//按需加载组件
app.get('/static/js/0.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/0.101373c8a5d52e3efa93.js')
})
app.get('/static/js/1.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/1.dcedba5cba93ed524144.js')
})
app.get('/static/js/2.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/2.86dd3e7947024164c9f5.js')
})
app.get('/static/js/3.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/3.69d49ed5571e963ac04f.js')
})
app.get('/static/js/4.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/4.19ea915852059eb8834f.js')
})
app.get('/static/js/5.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/5.5a94345050e98c4c1f4f.js')
})
app.get('/static/js/6.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/6.2e813f2fe63cd7028126.js')
})
app.get('/static/js/7.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/7.48394206e6412654facf.js')
})
//api
// var apiRoutes = express.Router()
//获取热门歌单
app.get('/api/getDiscList',function (req,res) {
    var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';
    axios.get(url,{
        headers:{
            referer:'https://c.y.qq.com/',
            host:'c.y.qq.com'
        },
        params:req.query
    }).then((response)=>{
        res.json(response.data);
    }).catch((e) =>{
        console.log(e);
    })
});
//获取歌曲url
app.post('/api/getPurlUrl', bodyParser.json(), function (req, res) {
    const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
    axios.post(url, req.body, {
        headers: {
            referer: 'https://y.qq.com/',
            origin: 'https://y.qq.com',
            'Content-type': 'application/x-www-form-urlencoded'
        }
    }).then((response) => {
        res.json(response.data)
    }).catch((e) => {
        console.log(e)
    })
})
//获取歌词
app.get('/api/lyric', function (req, res) {
    const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'

    axios.get(url, {
        headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
        },
        params: req.query
    }).then((response) => {
        res.json(response.data)
    }).catch((e) => {
        console.log(e)
    })
})
//获取歌单的对应音乐
app.get('/api/getCdInfo', function (req, res) {
    const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
    axios.get(url, {
        headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
        },
        params: req.query
    }).then((response) => {
        res.json(response.data)
    }).catch((e) => {
        console.log(e)
    })
})

// app.use('/api', apiRoutes);
//微信页面不重新排版
app.get('/MP_verify_wZPqstuSBoRVc0D7.txt',function (req,res) {
    res.sendFile(__dirname+'/MP_verify_wZPqstuSBoRVc0D7.txt')
})

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
