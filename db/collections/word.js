const Mongoose   = require( 'mongoose' ),
      WordSchema = new Mongoose.Schema( {
          english: {
              type:     String,
              required: true,
              trim:     true
          },
          polish:  {
              type:     String,
              required: true,
              trim:     true
          }
      } );


WordSchema.statics.insertMultiple = async function( words ) {

    const Model = this.model( 'Word' );

    let count = 0;

    for ( let word of words ) {

        if ( word.english && word.polish ) {

            let english = word.english.trim(),
                polish  = word.polish.trim();

            if ( await Model.findOne( { english, polish } ) ) {
                continue;
            }

            const DbWord = new Model( { english, polish } );

            try {
                await DbWord.save();

                count++;
            } catch ( e ) {

            }

        }

    }

    return count;

};

Mongoose.model( 'Word', WordSchema );
