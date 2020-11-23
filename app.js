// ********CHECKLIST FOR THINGS COMMONLY FORGOTTEN!!********
// HAS THE FUNCTION BEEN INVOKED? IF SO WHERE HAS IT BEEN INVOKED
// WHAT EXACTLY IS THE EVENTHANDLER READING? AND WHAT IS IT INVOKING?


function makeGrid() {
for (let i = 0; i < 64; i++) {
  let newDiv = $('<div class="cell">') 
  $('.grid').append(newDiv);
  }
}
makeGrid();
const PALETTE = [
  'red',
  'blue',
  'yellow',
  'green',
  'white',
  'purple',
  'grey',
  'black'
]

function makePalette () {
  for (let i = 0; i < PALETTE.length; i++) {
    const nextColor = PALETTE[i];
    const button = $('<button>')
        .css("backgroundColor", nextColor);
        button.click(onPaletteClick);
        $('.palette').append(button);
  }
  $('.palette button').first().addClass('active');
}

makePalette();

function onPaletteClick () {
  $('.palette button').removeClass('active');
  $(this).addClass('active');
}

function onGridClick () {
  const paletteColor = $('.palette .active').css('backgroundColor')
  
  if($(this).css('backgroundColor') === paletteColor){
    $(this).css('backgroundColor', 'rgba(0,0,0,0)');
  } else $(this).css('backgroundColor', paletteColor);

}
$('.cell').click(onGridClick);

function onClearClick () {
  $('.controls .clear').click(function(){  
    $('.grid .cell').css('backgroundColor', '');
  })
}
$('.grid .cell').click(onClearClick);



function onFillAllClick() {
  $('.controls .fill-all').click(function(){
   const paletteColor = $('.palette .active').css('backgroundColor');
   $('.grid .cell').css('backgroundColor', paletteColor);
  })
}
$('.grid .cell').click(onFillAllClick);

function onFillEmptyClick() {
  $('.controls .fill-empty').click(function(){
    const elements = $('.grid .cell');
    const paletteColor = $('.palette .active').css('backgroundColor');
    for(let i = 0; i < elements.length; i++){
      let nextElement = $(elements[i]);
      if(nextElement.css('backgroundColor')==='rgba(0, 0, 0, 0)'){
        $(nextElement).css('backgroundColor', paletteColor);
      }
    }
  })
}
$('.grid .cell').click(onFillEmptyClick); 

