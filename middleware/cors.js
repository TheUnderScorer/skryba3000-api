const App   = require( '../app' ),
      Hosts = require( '../hosts' );

App.use( ( req, res, next ) => {

    let origin = req.headers.origin;

    if ( Hosts.indexOf( origin ) > -1 ) {
        res.header( 'Access-Control-Allow-Origin', origin );
    }

    res.header( 'Access-Control-Allow-Credentials', 'true' );
    res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );

    next();
} );
