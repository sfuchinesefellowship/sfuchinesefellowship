

var passport = require('passport');
var WeixinStrategy = require('passport-weixin');

//扫码登录
//微信官网文档：https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419316505&token=&lang=zh_CN
passport.use('loginByWeixin',new WeixinStrategy({
    clientID: 'CLIENTID'
    , clientSecret: 'CLIENT SECRET'
    , callbackURL: 'CALLBACK URL'
    , requireState: false
    , scope: 'snsapi_login'
  }, function(accessToken, refreshToken, profile, done){
    done(null, profile);
  }));
  
  //微信客户端登录
  //微信官网文档：http://mp.weixin.qq.com/wiki/17/c0f37d5704f0b64713d5d2c37b468d75.html
  passport.use('loginByWeixinClient',new WeixinStrategy({
    clientID: 'CLIENTID'
    , clientSecret: 'CLIENT SECRET'
    , callbackURL: 'CALLBACK URL'
    , requireState: false
    , authorizationURL: 'https://open.weixin.qq.com/connect/oauth2/authorize' //[公众平台-网页授权获取用户基本信息]的授权URL 不同于[开放平台-网站应用微信登录]的授权URL
    , scope: 'snsapi_userinfo' //[公众平台-网页授权获取用户基本信息]的应用授权作用域 不同于[开放平台-网站应用微信登录]的授权URL
  }, function(accessToken, refreshToken, profile, done){
    done(null, profile);
  }));

  