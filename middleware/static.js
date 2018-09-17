const App     = require( '../app' ),
      Express = require( 'express' );

//Setup public path
App.use( Express.static( './uploads' ) );
