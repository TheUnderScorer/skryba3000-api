const Word = require( 'mongoose' ).model( 'Word' );

const SuccessResponse = require( '../responses/result' );

/**
 * Performs advanced filtering of word results
 *
 * @param {Array} results
 * @param {Array} searchedWords
 * @param {String} language
 *
 * */
const filterResults = ( results, searchedWords, language ) => {

    for ( let word of results ) {

        let translatedWord = word[ language ].split( ' ' ),
            index          = results.indexOf( word ),
            occurancy      = 0;

        for ( let searchedWord of searchedWords ) {
            if ( translatedWord.indexOf( searchedWord ) > -1 ) {
                occurancy++;
            }
        }

        results[ index ].occurancy = occurancy;

    }

    results = results
        .sort( ( a, b ) => a.occurancy > b.occurancy )
        .reverse()
        .filter( item => item.occurancy > 0 );

    return results;

};

module.exports = async ( req, res ) => {

    let result = [];

    if ( req.query.word && req.query.language ) {

        let wordSplit = req.query.word.split( ' ' ).filter( item => item.length > 2 ),
            language  = req.query.language,
            query     = {};

        query[ language ] = new RegExp( wordSplit.join( ' ' ) );

        result = await Word.find( query );

        for ( let word of wordSplit ) {

            let query = {
                [ language ]: new RegExp( word )
            };

            result = [ ...result, ...await Word.find( query ) ]

        }

        result = [ ...new Set( result.map( item => JSON.stringify( item ) ) ) ];

        SuccessResponse.result = filterResults( result.map( item => JSON.parse( item ) ), wordSplit, language );

    }


    return res.json( SuccessResponse );

};
