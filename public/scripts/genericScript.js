console.log( 'genero sourced' );

$( document ).ready( function(){
  console.log( 'JQ' );

  // test get function
  var getData = function(){
    console.log( 'in getData' );
    $.ajax({
      type: 'GET',
      url: '/testGet',
      success: function( response ){
        console.log( 'back from get call:', response );
      },
      error: function(){
        console.log( 'error with ajax call...');
      }
    })
  }; // end getData

  // test get function
  var postData = function(){
    console.log( 'in postData' );
    // get user info
    // assemble object to send
    var objectToSend={
      event: $( '#eventIn' ).val(),
      athlete: $( '#athleteIn' ).val(),
      award: $( '#awardIn' ).val()
    }; // end object to send
    console.log( 'sending:', objectToSend );
    $.ajax({
      type: 'POST',
      url: '/testPost',
      data: objectToSend,
      success: function( response ){
        console.log( 'back from post call:', response );
      },
      error: function(){
        console.log( 'error with ajax call...');
      }
    })
  }; // end getData

  /// - buttons to test - ///
  $( '#testGetButton' ).on( 'click', function(){
    console.log( 'in testGetButton on click' );
    getData();
  }); // end testGetButton
  $( '#addAwardButton' ).on( 'click', function(){
    console.log( 'in addAwardButton on click' );
    postData();
  }); // end addAwardButton

}); //end doc ready
