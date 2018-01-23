var CrazyColorDancer = function (top, left, timeBetweenSteps) {
  ColorDancer.call(this, top, left, timeBetweenSteps);
  this.move();
};

CrazyColorDancer.prototype = Object.create(ColorDancer.prototype);

CrazyColorDancer.prototype.move = function() {
  var styleSettings = {
    top: $('body').height() * Math.random(),
    left: $('body').width() * Math.random()
  };
  this.$node.css(styleSettings);
  setTimeout(this.move.bind(this), 500);
};



