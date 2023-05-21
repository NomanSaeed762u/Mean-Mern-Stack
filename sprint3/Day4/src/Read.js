const fs = require('fs');

function Read(path, callback) {
  const filePath = path;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      callback(err);
      return;
    }

    callback(null, data);
  });
}

module.exports = Read;
