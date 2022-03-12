const { unlinkSync } = require("fs");
const path = require('path');


exports.deleteFile = (filePath) => {
    unlinkSync(path.join(__dirname, "..",filePath));
};
