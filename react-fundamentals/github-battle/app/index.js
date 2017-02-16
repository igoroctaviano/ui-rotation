"user strict"

var React    = require('react');
var ReactDOM = require('react-dom');

var routes = require('./config/routes')

var USER_DATA = {
  name: 'Tyler McGinnis',
  username: 'tylermcginnis',
  image: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
};

var ProfilePic = React.createClass({
  render: function() {
    return (
      <img src={this.props.imageUrl} style={{heigth: 100, width: 100}} />
    )
  }
});

var Link = React.createClass({
  changeUrl: function() {
    window.location.replace(this.props.href);
  },

  render: function() {
    return (
      <span onClick={this.changeUrl} style={{color: 'blue', cursor: 'pointer'}}>
        {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <Link href={'https://www.github.com/' + this.props.username}>{this.props.username}</Link>
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(
  routes,
  document.getElementById('app')
);