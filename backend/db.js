const mongoose = require("mongoose");
require('dotenv').config(); // Make sure this line is present

const connection = mongoose.connect(process.env.mongoURL);

module.exports = {
    connection,
};
