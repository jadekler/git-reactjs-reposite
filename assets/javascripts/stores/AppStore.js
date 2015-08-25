var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _repositories = [
  {"name": "foo"},
  {"name": "bar"},
  {"name": "gaz"},
];

var AppStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _repositories;
  },
});

AppDispatcher.register(function(action) {
});

module.exports = AppStore;
