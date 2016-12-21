'use strict'

module.exports = function (set, get, has){
  // if (has('xxxx.xxx'))
  //服务器监听端口：
  set('web.port',3000);

  // session secret
  set('web.session.secret', 'test');

};
