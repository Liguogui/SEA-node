var express = require('express')
const bodyParser = require('body-parser')
var axios = require('axios');

var app = express()

// /static/css/index2.css
app.get('/static/css/app.19d686aad561cd2d4a59a56a42cd8a43.css',function (req,res) {
    res.sendFile(__dirname+'/static/css/app.19d686aad561cd2d4a59a56a42cd8a43.css')
})
//js
app.get('/static/js/manifest.69d001965d4b5d49331b.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/manifest.69d001965d4b5d49331b.js')
})
app.get('/static/js/vendor.1cef474373a6bc75e8b2.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/vendor.1cef474373a6bc75e8b2.js')
})
app.get('/static/js/app.9b1c51a4c162941556d8.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/app.9b1c51a4c162941556d8.js')
})
//按需加载组件
app.get('/static/js/0.1a387e1e819727dd362d.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/0.1a387e1e819727dd362d.js')
})
app.get('/static/js/1.65f5878dd3256a05d4e3.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/1.65f5878dd3256a05d4e3.js')
})
app.get('/static/js/2.02291adccc4abd7a4f8c.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/2.02291adccc4abd7a4f8c.js')
})
app.get('/static/js/3.8e09d86bfabf7efb3389.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/3.8e09d86bfabf7efb3389.js')
})
app.get('/static/js/4.0b7f26631c5309652bbd.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/4.0b7f26631c5309652bbd.js')
})
app.get('/static/js/5.defaf4012c2f756a6535.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/5.defaf4012c2f756a6535.js')
})
app.get('/static/js/6.e1598c420a8c61ac0a87.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/6.e1598c420a8c61ac0a87.js')
})
app.get('/static/js/7.962c2ddf967a50636ce3.js',function (req,res) {
    res.sendFile(__dirname+'/static/js/7.962c2ddf967a50636ce3.js')
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
