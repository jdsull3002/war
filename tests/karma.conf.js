module.exports = function (config) {
    config.set({
        files: [
            { pattern: 'test-context.js', watched: false }
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        preprocessors: {
            'test-context.js': ['webpack']
        },

        browsers: ['Chrome'],

        webpack: {
            module: {
                rules: [
                    {
                        test: /\.js/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    ['@babel/preset-env', {targets: "defaults"}]
                                ],
                            }
                        }
                    }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }

    });
};
