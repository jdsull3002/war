module.exports = function(config){
  config.set({

    basePath : '../../',

    files : [
        'war/scripts/Card.js',
        'war/scripts/Deck.js',
        'war/tests/unit/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ]

  });
};