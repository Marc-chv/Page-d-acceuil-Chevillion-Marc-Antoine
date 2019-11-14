//side bar//
function openNav() {
    document.getElementById("sideNavigation").style.width = "500px";
    
}
 
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    
}

//scroll disparition nav//
(function(){
    var timeout;
    var $window = $(window);
    var $navbar = $('#nav');
    
    $window.on('scroll', function(e){
      clearTimeout(timeout);
      
      timeout = setTimeout(function(){
        if ($window.scrollTop() > 15) {
          $navbar.addClass('hide');
        } else {
          $navbar.removeClass('hide');
        }
      }, 10);
    });
  }());

  $(document).ready(function() {
    $('.titre').fadeOut(1);
    $('.titre').removeClass('hide');
    $('.titre').fadeIn(2200);
});


//apparition image deuxième bloc//
(function(){
  var timeout;
  var $window = $(window);
  var $section2 = $('#bloc2');
  
  $window.on('scroll', function(e){
    clearTimeout(timeout);
    
    timeout = setTimeout(function(){
      if ($window.scrollTop() > 30) {
        $section2.addClass('apparition');
      } else {
        $section2.removeClass('apparition');
      }
    }, 10);
  });
}());

// apparition mots du troisième bloc//
var mots = ["Le","Petit", "Beemo"];
var counter = 0;
var inst = setInterval(change, 1000);

function change() {
  document.getElementById("words").innerHTML = mots[counter];
  
  counter++;
  if (counter >= mots.length) {
    counter = 0;
    Interval(inst);
  }
}
