'use strict'

import path from 'path';
import ProjectCore from 'project-core';
import createDebug from 'debug';

const $ = global.$ = new ProjectCore();

// 加载Debug函数
$.createDebug = function (name) {
  return createDebug('my:' + name);
};
const debug = $.createDebug('server');

//加载配置文件

$.init.add((done) => {
  try {
    $.config.load(path.resolve(__dirname, 'config.js'));
    const env = process.env.NODE_ENV || null;
    if (env) {
      debug('load env: %s', env);
      $.config.load(path.resolve(__dirname, '../config', env + '.js')); //加载 config目录下的dev.js文件
    }
    $.env = env;
    done();
  } catch (err) {
    err.msg = '配置文件格式不正确';
    done(err);
  }
});

// 初始化MongoDB
$.init.load(path.resolve(__dirname, 'init', 'mongodb.js'));

// 加载Models
$.init.load(path.resolve(__dirname, 'models'));

//加载methods
$.init.load(path.resolve(__dirname, 'methods'));

// 初始化Express
$.init.load(path.resolve(__dirname, 'init', 'express.js'));

// 初始化中间件
$.init.load(path.resolve(__dirname, 'middlewares'));

// 加载路由
$.init.load(path.resolve(__dirname, 'routes'));


//初始化
$.init((err) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  } else {
    debug('inited env: %s.js inited port: %s', $.env, $.config.get('web.port'));
    // debug('inited port: %s', $.config.get('web.port'));
  }
  const userfile = require(path.resolve(__dirname, '../config', $.env + '.js'));
  // require('./test')



  // $.method('user.add').call(
  //   {
  //     type: typeof userfile,
  //   }, console.log);
  // const item = new $.model.User({
  //   name: `User${$.utils.date('Ymd')}`,
  //   password: '12345',
  //   nickname: '测试用户',
  // });
  // item.save(console.log);
});
