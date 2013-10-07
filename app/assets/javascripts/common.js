$(function() {
  // slider
  var Page = (function() {
    var $navArrows = $( '#nav-arrows' ),
      $nav = $( '#nav-dots > span' ),
      slitslider = $( '#slider' ).slitslider( {
        onBeforeChange : function( slide, pos ) {

          $nav.removeClass( 'nav-dot-current' );
          $nav.eq( pos ).addClass( 'nav-dot-current' );

        }
      } ),
      init = function() {
        initEvents();
      },
      initEvents = function() {
        $navArrows.children( ':last' ).on( 'click', function() {
          slitslider.next();
          return false;
        } );
        $navArrows.children( ':first' ).on( 'click', function() {
          slitslider.previous();
          return false;
        } );
        $nav.each( function( i ) {
          $( this ).on( 'click', function( event ) {
            var $dot = $( this );
            if( !slitslider.isActive() ) {
              $nav.removeClass( 'nav-dot-current' );
              $dot.addClass( 'nav-dot-current' );
            }
            slitslider.jump( i + 1 );
            return false;
          } );
        } );
      };
  return { init : init };
  })();
  Page.init();

  // mouseover
  $("#side-contents img").each(function(){
    $(this).fadeTo("normal", 0.5);
  });
  $("#side-contents img").hover(function(){
    $(this).fadeTo("normal", 1.0);
  },function(){
    $(this).fadeTo("normal", 0.5);
  });
});
