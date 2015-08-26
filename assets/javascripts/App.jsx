import $ from 'jquery';
import React from 'react';
import RepoBoard from 'components/RepoBoard';

var githubOAuth = require('github-oauth');

$(function onLoad() {
  function render() {
    React.render(
      <RepoBoard />,
      document.getElementById('content')
    );
  }

  render();
});
