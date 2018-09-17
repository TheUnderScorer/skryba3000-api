const Mongoose = require( 'mongoose' ),
      Settings = require( '../settings' );

Mongoose.connect( Settings.db.host, Settings.db.options, ( err ) => {
    if ( err ) {
        console.log( err );

        process.exit();
    }
} );

//Create word model
require( './collections/word' );

module.exports = Mongoose.connection;
