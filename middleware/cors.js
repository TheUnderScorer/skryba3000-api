const App   = require( '../app' ),
      Hosts = process.env.HOSTS.split( ',' );

App.use( ( req, res, next ) => {

    const Origin = req.get( 'origin' );

    if ( Hosts.indexOf( Origin ) > -1 ) {
        res.header( 'Access-Control-Allow-Origin', Origin );
    }

    res.header( 'Access-Control-Allow-Credentials', 'true' );
    res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );

    next();
} );
