'use strict'

// var aaaa = require('./tests')

$.method('user.add').call(
  {
    name: 'samkc',
    email: 'samkc@gmail.com',
    password: '123456',
    nickname: 'TEST1',
    about: 'hahahaha'
    // type: typeof aaaa,
  }, console.log);
