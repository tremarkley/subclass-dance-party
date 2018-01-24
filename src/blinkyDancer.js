var BlinkyDancer = function(top, left, timeBetweenSteps, node) {
debugger
  //this.$node = $('<img class="powerRangerDancer" src="./assets/images/powerRanger.gif" alt="a colorful blinking power ranger">');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('powerRangerDancer');
  this.$node.append($('<img src="./assets/images/powerRanger.gif" alt="a colorful blinking power ranger">'));
  //this.setPosition(top, left);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.step = function() {

//  if (this.is)
  // when toggled to hidden they reappear in random spot
  /*$('body').find(':hidden').css({
    top: $('body').height() * Math.random(),
    left: $('body').width() * Math.random()
  });*/

  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
