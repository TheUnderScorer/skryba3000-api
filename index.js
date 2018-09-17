if ( process.env.NODE_ENV !== 'production' ) {
    require( 'dotenv' ).load();
}

//Load express app
require( './app' );

//Static path for Express
require( './middleware/static' );

//Mongo session
require( './middleware/session' );

//Body parser
require( './middleware/body-parser' );

//CORS
require( './middleware/cors' );

//Validates API token
require( './middleware/validate-token' );

//Sets json header for response
require( './middleware/json-header' );

//Load routes
require( './routes' );

//Load HTTP server
require( './http' );

