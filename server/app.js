var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlEncodedParser = bodyParser.urlencoded( { extended: false } );
var port = process.env.PORT || 8080;
// global array of awards
var awards = [];

app.listen( port, function( req, res ){
  console.log( 'server listening on', port );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

// testGet
app.get( '/getAwards', function( req, res ){
  console.log( 'getAwards url hit' );
  // do work here
  // assemble object to return
  var objectToReturn = {
    allAwards: awards
  }; // end object to return
  // return objectToReturn
  res.send( objectToReturn );
}); // end testGet

// testPost
app.post( '/addAward', urlEncodedParser, function( req, res ){
  console.log( 'addAward url hit. req.body:', req.body );
  // do work here
  // push new award into array
  awards.push( req.body );
  // assemble object to return
  var objectToReturn = {
    allAwards: awards
  }; // end object to return
  // return objectToReturn
  res.send( objectToReturn );
}); // end testPost

// static folder
app.use( express.static( 'public' ) );
