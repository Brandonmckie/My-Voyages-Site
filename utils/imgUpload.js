const multer = require('multer');
const path = require('path');

// Image uploader Controller for POST api/posts
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, '../public/img/blog-img');
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));

      if(mimeType && extname) {
          return cb(null, true);
      };
      cb('Give proper files formate to upload');
  }
});

module.exports = upload;
