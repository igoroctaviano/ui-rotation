$ = jQuery   = require('jquery');
var React    = require('react'),
    ReactDOM = require('react-dom'),

    Authors  = require('./components/authors/authorPage'),
    Home     = require('./components/homePage'),
    About    = require('./components/about/aboutPage'),
    Header   = require('./components/common/header');

(function(window) {
  "use strict";
  var App = React.createClass({
    render: function () {
      var Child;

      switch (this.props.route) {
        case 'about':
          Child = About;
          break;
        case 'authors':
          Child = Authors;
          break;
        default:
          Child = Home;
      }

      return (
        <div>
          <Header />
          <Child />
        </div>
      );
    }
  });

  function render() {
    var route = window.location.hash.substr(1); // Getting a piece of the URL
    ReactDOM.render(<App route={route}/>, document.getElementById('app'));
  }

  window.addEventListener('hashchange', render);
  render();
})(window);