'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.scss');

var imageDatas = require('../data/imageDatas');

var imageDatas = require('../data/imageDatas.json');

var imageURL = require('../images/yeoman.png');

var GalleryReactApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
      </div>
    );
  }
});
React.render(<GalleryReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryReactApp;
