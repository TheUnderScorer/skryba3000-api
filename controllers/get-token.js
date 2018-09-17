const Settings = require( '../settings' );

const Crypto = require( 'crypto' );

const SuccessResponse = require( '../responses/result' ),
      ErrorResponse   = require( '../responses/error' );

module.exports = async ( req, res ) => {

    const Host = req.protocol + '://' + req.get( 'host' );

    //Request from unknown host
    if ( !require( '../hosts' ).find( item => item === Host ) ) {

        ErrorResponse.message = 'Unknown host';

        return res.status( 400 ).json( ErrorResponse );

    }

    if ( !req.session.token ) {

        let token = Crypto.randomBytes( 48 ).toString( 'hex' );

        req.session.token = token;

        SuccessResponse.result = token

    } else {
        SuccessResponse.result = req.session.token;
    }

    return res.json( SuccessResponse );

};
