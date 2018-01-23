var CrazyColorDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<div class="dancerHolder"><img class="moonwalk" src="./assets/images/moonwalk.gif" alt="moonwalker dude"></div>');
  ColorDancer.call(this, top, left, timeBetweenSteps, this.$node);
  this.setPosition(top, left);
  this.move();
};

CrazyColorDancer.prototype = Object.create(ColorDancer.prototype);

CrazyColorDancer.prototype.move = function() {
  if (this.isMoving) {
    var styleSettings = {
      top: $('body').height() * Math.random(),
      left: $('body').width() * Math.random()
    };
    //this.$node.css(styleSettings);
    this.$node.animate(styleSettings, 3000);
  }
  setTimeout(this.move.bind(this), 3000);
  
};



