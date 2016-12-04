'use strict';

import mongoose from 'mongoose';

module.exports = function(done){

  const Schema = mongoose.Schema;
  const ObjectID = Schema.ObjectId;

  const User = new Schema({
    name:{type: String, unique:true},
    password: {type:String},
    nickname: {type: String},
  });
  $.mongodb.model('user', user);
  $.model.user = $.mongodb.model('user');

  done();
}
