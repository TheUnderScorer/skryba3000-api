const Crypto = require( 'crypto' );

const SuccessResponse = require( '../responses/result' ),
      ErrorResponse   = require( '../responses/error' );

module.exports = async ( req, res ) => {

    const Origin = req.get( 'origin' );

    //Request from unknown host
    if ( process.env.HOSTS.split( ',' ).indexOf( Origin ) === -1 ) {

        ErrorResponse.message = 'Invalid host';

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
