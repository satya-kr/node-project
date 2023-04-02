const dotenv = require('dotenv');
const __db_connect = require('./configs/database');

dotenv.config();

__db_connect().then(() => {
    require('./routes');
})
