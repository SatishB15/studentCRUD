url = 'mongodb://localhost:27017/students';
options = { useNewUrlParser: true, useUnifiedTopology: true };

const db = { url, options };
module.exports = db;
