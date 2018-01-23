$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function() {
    let top = $('body').height() * .5;
    let increment = 1 / window.dancers.length * .5;
    let multiplier = 0;
    let isFirst = true;
    let offset = 0;
    if (window.dancers.length % 2 === 0) {
      offset = $('body').width() * (increment) * .5;
    }
    counter = 0;
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].isMoving = false;
      window.dancers[i].$node.stop();
      if (window.dancers.length % 2 !== 0 && isFirst) {
        window.dancers[i].setPosition(top, $('body').width() * .5);
        isFirst = false;
      } else {
        if (counter % 2 === 0) {
          multiplier++;
          let width = $('body').width() * .5 + $('body').width() * (increment * multiplier) - offset;
          window.dancers[i].setPosition(top, width); 
        } else {
          let width = $('body').width() * .5 + $('body').width() * (-1 * increment * multiplier) + offset;
          window.dancers[i].setPosition(top, width);
        }
        counter++;
      }
    }
  });
});


