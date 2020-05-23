const dotenv = require('dotenv');
dotenv.config();

const serverConfig = {
    serverPort: 3000 || 4000,
    secretKey: "MY_VERY_SECRET_KEY"
};

module.exports = serverConfig;
