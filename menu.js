$(document).ready(function() {
  // Hover w jQuery nadaje dwa atrybuty - pierwszy to najechanie myszką na obiekt a drugi to zjechanie myszką z obiektu;
  $('.first-dropdown').hover(

    // Po najechaniu - slideDown - to zmienia display na 'block';
    function(){
      $(this).children('.first-level').finish();
      $(this).children('.first-level').slideDown(200, stop());
    },
    // Po opuszczeniu - slideUp to zmienia display na 'none';
    function(){
      $(this).children('.first-level').finish();
      $(this).children('.first-level').slideUp(100, stop());
    }
  );

  $('.second-dropdown').hover(
    // Po najechaniu - slideDown - to zmienia display na 'block';
    function(){
      $(this).children('.second-level').finish();
      $(this).children('.second-level').slideDown(300, stop());
    },
    // Po opuszczeniu - slideUp to zmienia display na 'none';
    function(){
      $(this).children('.second-level').finish();
      $(this).children('.second-level').slideUp(100, stop());
    }
  );
});
