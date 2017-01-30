'use strict'

module.exports = function (set, get, has){
  // if (has('xxxx.xxx'))
  //服务器监听端口：
  set('web.port',3000);

  // session secret
  set('web.session.secret', 'test');


  set('web.session.redis', {
    host: '127.0.0.1',
    port: 32770,
  })

};
