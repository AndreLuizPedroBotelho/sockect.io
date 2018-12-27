var db = require('../libs/db_connection')();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function (app) {
  var user_schema = Schema({
    nome: {type:String, required: true},
    email: {type:String, required: true},
    nascimento: {type:String, required: true},
    celular: {type:Number, required: true}
  });

  return mongoose.model('users', user_schema);
}