/**
 * Controller for inserting new words into DB
 * */

const Word = require( 'mongoose' ).model( 'Word' );

const SuccessResponse = require( '../responses/result' ),
      ErrorResponse   = require( '../responses/error' );

module.exports = async ( req, res ) => {

    if ( !req.body.words ) {

        ErrorResponse.message = 'No words provided.';

        return res.json( ErrorResponse );

    }

    try {
        let words = req.body.words,
            count = await Word.insertMultiple( words );

        SuccessResponse.result = parseInt( count );

        return res.status( 201 ).json( SuccessResponse );

    } catch ( e ) {

        ErrorResponse.message = 'Error while importing words.';

        return res.status( 500 ).json( ErrorResponse );
    }

};
