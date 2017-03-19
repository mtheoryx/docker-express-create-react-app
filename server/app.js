const express =         require('express');
const morgan =          require('morgan');
const path =            require('path');
const compression =     require('compression');

const app = express();

// Setup logger
app.use(
    morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms')
);

// Enable compression
app.use(compression());

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
);

module.exports = app;
