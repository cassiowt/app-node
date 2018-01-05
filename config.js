const config = {
    name: 'app',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3021,
    base_url: process.env.BASE_URL || 'http://localhost:3021',
    db: {
       // uri: 'mongodb://localhost/animal',
        uri: 'mongodb://root:G0W40bT2QE39@localhost/animal',
       // uri: 'mongodb://animal:animal@localhost/animal',
    },
}

module.exports = config;