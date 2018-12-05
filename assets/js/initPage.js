// GENERAL VARIABLES
var state = 'mom';

// Change page style to current state
function initPageStyle(name){
  if (name === 'mom') {
    $('.mother-image-container').css('opacity', '1');
    $('body').css('background-color', '#ffcccc');
    $('.mobile-image-container').css('background-image', 'url("media/mother.png")');
    $('.father-image-container').css('opacity', '0.3');
  } else{
    $('.father-image-container').css('opacity', '1');
    $('body').css('background-color', '#b3e5fc');
    $('.mobile-image-container').css('background-image', 'url("media/father.png")');
    $('.mother-image-container').css('opacity', '0.3');

  }
}

// Switch style eventlistener
// Change to dad if state === mom (vise versa)
$(function() {
    $('#toggle-event').change(function() {
      if (state === 'mom'){
        initPageStyle('dad');
        state = 'dad';
      }else{
        initPageStyle('mom');
        state = 'mom';
      }
    })
  })

// Init the page
  $(document).ready(function(){
    initPageStyle(state);
  })
