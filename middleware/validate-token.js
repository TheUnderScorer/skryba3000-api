/**
 * Middleware used for validating token in api request
 * */

const App = require( '../app' );

const ErrorResponse = require( '../responses/error' );

App.use( ( req, res, next ) => {

    //API call for token, or not an api call at all
    if ( req.url.indexOf( 'get-token' ) > -1 || req.url.indexOf( 'api' ) === -1 ) {
        return next();
    } else {

        if ( !req.query.token || !req.session.token || req.query.token !== req.session.token ) {

            ErrorResponse.message = 'Invalid token';

            return res.json( ErrorResponse );

        } else {
            return next();
        }

    }

} );
