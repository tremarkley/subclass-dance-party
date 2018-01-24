var CrazyColorDancer = function (top, left, timeBetweenSteps) {
  //this.$node = $('<div class="dancerHolder"><img class="moonwalk" src="./assets/images/moonwalk.gif" alt="moonwalker dude"></div>');
  this.setTimeoutVar;
  ColorDancer.call(this, top, left, timeBetweenSteps, this.$node);
  this.$node.addClass('dancerHolder');
  this.$node.removeClass('dancer');
  this.$node.append($('<img class="moonwalk" src="./assets/images/moonwalk.gif" alt="moonwalker dude">'));
  this.setPosition(top, left);
  this.move();
};

CrazyColorDancer.prototype = Object.create(ColorDancer.prototype);
CrazyColorDancer.prototype.constructor = CrazyColorDancer;

CrazyColorDancer.prototype.move = function() {
  let nodePosition = getPosition(this.$node);
  for (let i = 0; i < window.dancers.length; i++) {
    if (window.dancers[i] !== this && window.dancers[i].constructor === CrazyColorDancer) {
      let dancerPosition = getPosition(window.dancers[i].$node);
      if (compare(nodePosition[0], dancerPosition[0]) && compare(nodePosition[1], dancerPosition[1])) {
        this.isMoving = false;
        window.dancers[i].isMoving = false;
        this.$node.find('img').attr('src', './assets/images/psy-moving.gif');
        window.dancers[i].$node.find('img').attr('src', './assets/images/psy-moving.gif');
        break;
      } 
    }
  }
  if (this.isMoving) {
    var styleSettings = {
      top: $('body').height() * Math.random(),
      left: $('body').width() * Math.random()
    };
    this.$node.animate(styleSettings, 3000);
  }
  this.setTimeoutVar = setTimeout(this.move.bind(this), 3000);
};

var compare = function comparePositions( p1, p2 ) {
  var r1, r2;
  r1 = p1[0] < p2[0] ? p1 : p2;
  r2 = p1[0] < p2[0] ? p2 : p1;
  return r1[1] > r2[0] || r1[0] === r2[0];
};

var getPosition = function getPositions( elem ) {
  var pos, width, height;
  pos = $( elem ).position();
  width = $( elem ).width();
  height = $( elem ).height();
  return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
};


