describe('crazyColorDancer', function() {

  var crazyColorDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    crazyColorDancer = new CrazyColorDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(crazyColorDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its color change', function() {
    sinon.spy(crazyColorDancer.$node, 'css');
    crazyColorDancer.step();
    expect(crazyColorDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(crazyColorDancer, 'step');
      expect(crazyColorDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(crazyColorDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(crazyColorDancer.step.callCount).to.be.equal(2);
    });
    it('should call move at least twice per second', function() {
      sinon.spy(crazyColorDancer, 'move');
      expect(crazyColorDancer.move.callCount).to.be.equal(0);
      clock.tick(500); // ? it seems an extra tick is necessary...
      clock.tick(500);
      clock.tick(500);

      expect(crazyColorDancer.move.callCount).to.be.equal(2);

      clock.tick(500);
      expect(crazyColorDancer.move.callCount).to.be.equal(3);
    });
  });
});