const path = require('path');
const fs = require('fs');

// Directory to store uploaded images
const UPLOAD_DIR = path.join(__dirname, '../uploads/images');

if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR);
}

exports.uploadImage = (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'No file uploaded or file type is not allowed.' });
    }
    res.status(200).send({
        message: 'Image uploaded successfully.',
        filename: req.file.filename
    });
};

exports.getImage = (req, res) => {
    const filename = req.params.filename;
    const filepath = path.join(UPLOAD_DIR, filename);

    if (!fs.existsSync(filepath)) {
        return res.status(404).send({ message: 'Image not found.' });
    }

    res.sendFile(filepath);
};
