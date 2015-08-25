import React from 'react';

var Repository = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    );
  }
});

module.exports = Repository;
