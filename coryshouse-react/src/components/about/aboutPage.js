"use strict";

var React = require('react'),

About = React.createClass({
  render: function() {
    return (
      <div>
        <h1>About</h1>
        <p>
          This app uses the following techs:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    );
  }
});

module.exports = About;