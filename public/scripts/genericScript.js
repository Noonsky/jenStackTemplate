if( verbose ) console.log( 'genero sourced' );
var verbose = false;

$( document ).ready( function(){
  var displayAwards = function( awards ){
    if( verbose ) console.log( 'in displayAwards:', awards );
    // loop through all awards and display on DOM
    // empty ul prior to append
    $( '#awardsOut' ).html('');
    for (var i = 0; i < awards.length; i++) {
      // append a li for each award
      $( '#awardsOut' ).append( '<li>' + awards[i].event + ', ' + awards[i].athlete + ': ' + awards[i].award + '</li>' )
    } // end for
  }; // end displayAwards

  // test get function
  var getData = function(){
    if( verbose ) console.log( 'in getData' );
    $.ajax({
      type: 'GET',
      url: '/getAwards',
      success: function( response ){
        if( verbose ) console.log( 'back from get call:', response );
        displayAwards( response.allAwards );
      },
      error: function(){
        if( verbose ) console.log( 'error with ajax call...');
      }
    })
  }; // end getData

  // test get function
  var postData = function(){
    if( verbose ) console.log( 'in postData' );
    // get user info
    // assemble object to send
    var objectToSend={
      event: $( '#eventIn' ).val(),
      athlete: $( '#athleteIn' ).val(),
      award: $( '#awardIn' ).val()
    }; // end object to send
    if( verbose ) console.log( 'sending:', objectToSend );
    $.ajax({
      type: 'POST',
      url: '/addAward',
      data: objectToSend,
      success: function( response ){
        if( verbose ) console.log( 'back from post call:', response );
        // display award on document
        displayAwards( response.allAwards );
        // empty inputs
        $( '#eventIn' ).val('');
        $( '#athleteIn' ).val('');
        $( '#awardIn' ).val('');
      },
      error: function(){
        if( verbose ) console.log( 'error with ajax call...');
      }
    })
  }; // end getData

  /// - buttons to test - ///
  $( '#testGetButton' ).on( 'click', function(){
    if( verbose ) console.log( 'in testGetButton on click' );
    getData();
  }); // end testGetButton
  $( '#addAwardButton' ).on( 'click', function(){
    if( verbose ) console.log( 'in addAwardButton on click' );
    // only make post call if no empties
    if( $( '#eventIn' ).val().length > 0 && $( '#athleteIn' ).val().length > 0 && $( '#awardIn' ).val().length > 0 ){
      postData();
    }
    else {
      alert( "All input fields are necessary, yo!" );
    }
  }); // end addAwardButton

  // init
  getData();
}); //end doc ready
