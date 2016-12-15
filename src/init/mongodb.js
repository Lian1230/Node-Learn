'use strict'

import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

module.exports = function(done){

  const conn = mongoose.createConnection($.config.get('db.mongodb'));
  $.mongodb = conn;
  $.model = {};

  done();
}
