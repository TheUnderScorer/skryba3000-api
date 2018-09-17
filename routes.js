const App    = require( './app' );

//Get api token
App.get( '/api/get-token', require( './controllers/get-token' ) );

//Insert new words into database
App.post( '/api/insert-words', require( './controllers/insert-words' ) );

//Check if word has any translations
App.get( '/api/get-translations', require( './controllers/get-translations' ) );
