const App        = require( '../app' ),
      Session    = require( 'express-session' ),
      MongoStore = require( 'connect-mongo' )( Session ), //Mongo session
      Connection = require( '../db/connection' ); //connection with mongo database

//Setup session
App.use( Session( {
    secret:            'sup_pro',
    resave:            true,
    saveUninitialized: false,
    store:             new MongoStore( {
        mongooseConnection: Connection
    } )
} ) );

