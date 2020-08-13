const express = require('express');
const path = require('path');
const open = require('open');
import webpack from 'webpack';
import config from '../webpack.config.dev';


const port = 4002;
const app = express();
const compiler = webpack(config)


// We are making a get request to our html file!!!

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});


// We want our application to listen on port 3000..

app.listen(port, err => {
    if (err) {
        console.log(err);
    }
    else{
        open('http://localhost:' + port);
        console.log(`app is listening on port ${port}`);
    }
})
