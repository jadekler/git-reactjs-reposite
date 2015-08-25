import React from 'react';
import Repository from './Repository';

var AppStore = require('../stores/AppStore');

function getRepositories() {
  var repositories = [];
  var storeRepositories = AppStore.getAll();

  for (var key in storeRepositories) {
    repositories.push(<Repository name={storeRepositories[key].name} />);
  }

  return {repositories: repositories};
}

var RepoBoard = React.createClass({
  getInitialState: function() {
    return getRepositories();
  },
  render: function() {
    return (
      <div>
        Hello world

        {this.state.repositories.length > 0 ? this.state.repositories : <div className='loading'>Loading GitHub data...</div>}
      </div>
    );
  }
});

module.exports = RepoBoard;
