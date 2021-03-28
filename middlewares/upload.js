const multer = require('multer');
const mimeType = require('mime-types');

let random = function (min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, random(100000, 999999) + '.' + mimeType.extension(file.mimetype));
    }
});

module.exports = multer({storage: storage});