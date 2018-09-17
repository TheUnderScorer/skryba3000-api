/**
 * Creates node server
 *
 * @file server.js
 *
 * */

//Load app
require( './lib/app' );

//Load middleware
require( './lib/web/middleware' );

//Load server
require( './lib/web/http' );

//Load routes
require( './lib/web/routes' );

