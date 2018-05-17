var express = require('express')
const bodyParser = require('body-parser')
var axios = require('axios');

var app = express()

// /static/css/index2.css
app.get('/static/css/app.6b281e8efd648a8a36a494dd2f7ad4cd.css',function (req,res) {
    res.sendFile(__dirname+'/static/css/app.6b281e8efd648a8a36a494dd2f7ad4cd.css')
})
//js
app.get('/static/js/manifest.a33cca52507495becd86.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/manifest.a33cca52507495becd86.js')
})
app.get('/static/js/vendor.e754d3ca035decc066b1.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/vendor.e754d3ca035decc066b1.js')
})
app.get('/static/js/app.c4c4197708b6854d81fc.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/app.c4c4197708b6854d81fc.js')
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
