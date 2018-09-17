const Express = require( 'express' ),
      App     = Express();

const Session    = require( 'express-session' ),
      Connection = require( './db/connection' ); //connection with mongo database


module.exports = App;
