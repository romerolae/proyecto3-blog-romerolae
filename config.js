//! Environment Variables 
// Loads environment variables from a .env file into process.env
require('dotenv').config()

// Object containing all configurations for the API and DB

const configs = {
    api:{
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.host
    },
    db:{
        development:{
            dialect: 'postgres',
            host:'localhost',
            username: 'postgres',
            password: 'root',
            port: 5433,
            database: 'posts-db',
            define:{
                timestamps: true,
                underscored: true,
                underscoredAll: true
            }

        },
        test:{},
        production:{}
    }
}
module.exports = configs