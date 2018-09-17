const App = require( '../app' );

App.use( ( req, res, next ) => {
    res.header( 'Content-Type', 'application/json; charset=utf-8' );

    next();
} );
