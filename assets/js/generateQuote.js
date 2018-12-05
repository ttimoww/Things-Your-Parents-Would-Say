// GENERAL VARIABLES
var mom = [['What are you doing, ', 'Have fun at school but, ', 'Be care full when you cross the street, '],
           ['clean up your mess ', 'you better help me with these dishes ', 'you have to hurry up ', 'I cant find the remote, so help me find it '],
           ['or you will be grounded!', 'or you will be late.']];

var dad = [['Can you help me bud, ', 'Come here buddy, ', 'How is it going, '],
          ['I cant find the remote, so can you help me find it ', 'can you pass me some root beer '],
          ['before I miss the game', 'before it is too late']];


// Generate random number
const randomNumber = max => Math.floor(Math.random() * max);

// Clear Quotes
const clearQuotes = () => $('.quotes-container').empty();

// Write quote to page
function writeToPage(quote){
  $('.quotes-container').append(`<p>${quote}</p>`);
}

// Construct a random quote
$('#generate-quotes').click(function(){
  clearQuotes();
  const numberOfQuotes = $('.number-quotes option:selected').text();
  for (var i = 0; i < numberOfQuotes; i++) {
    if (state === 'mom'){
      var quote = '"' + mom[0][randomNumber(mom[0].length)] + mom[1][randomNumber(mom[1].length)] + mom[2][randomNumber(mom[2].length )] + '"';
    }else{
      var quote = '"' + dad[0][randomNumber(dad[0].length)] + dad[1][randomNumber(dad[1].length)] + dad[2][randomNumber(dad[2].length )] + '"';

    }
    writeToPage(quote);
  }
})
