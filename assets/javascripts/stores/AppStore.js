var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var _repositories = [
  {"name": "foo"},
  {"name": "bar"},
  {"name": "gaz"},
];

var AppStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _repositories;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
});

AppDispatcher.register(function(action) {
});

module.exports = AppStore;
