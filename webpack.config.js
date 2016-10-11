module.exports = {
    entry: './src/app',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    }
};
