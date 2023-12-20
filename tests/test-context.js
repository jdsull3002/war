
// require("babel-polyfill");

var context = require.context('./unit', true, /\.test\.js$/);
context.keys().forEach(context);
