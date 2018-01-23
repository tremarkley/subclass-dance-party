var ColorDancer = function (top, left, timeBetweenSteps, node) {
  this.colorSelection = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
  this.colorIndex = 0;
  Dancer.call(this, top, left, timeBetweenSteps, node);
};

ColorDancer.prototype = Object.create(Dancer.prototype);

ColorDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.colorIndex = (this.colorIndex + 1) % this.colorSelection.length;
  var colorSettings = {
    'box-shadow': '0 20px 20px -20px ' + this.colorSelection[this.colorIndex]
  };
  this.$node.css(colorSettings);
};
