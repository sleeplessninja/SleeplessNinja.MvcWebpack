var path = require('path');
module.exports = {
    entry: './src/ts/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        library: {
            name: 'NINJAZ',
            type: 'var'
        },
        filename: 'app-client.js',
        path: path.resolve(__dirname, '../wwwroot/js'),
    }
};
