const express = require('express');
const multer = require('multer');
const path = require('path');
const imageController = require('../controllers/imageController');

const router = express.Router();

// Multer setup for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads/images'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Only images are allowed (jpeg, png, gif).'));
        }
    }
});

// Routes
router.post('/upload', upload.single('image'), imageController.uploadImage);
router.get('/images/:filename', imageController.getImage);

module.exports = router;
