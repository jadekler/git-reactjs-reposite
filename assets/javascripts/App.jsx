import $ from 'jquery';
import React from 'react';
import RepoBoard from 'components/RepoBoard';

$(function onLoad() {
  function render() {
    React.render(
      <RepoBoard />,
      document.getElementById('content')
    );
  }

  render();

  // TODO: this may be unnecessary?
  $(document).on('page:change', () => {
    render();
  });
});

$("document").ready(function() {
  $('.ui.dropdown').dropdown();
});
