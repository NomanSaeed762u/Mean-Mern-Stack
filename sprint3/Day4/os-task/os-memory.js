const os = require('os');

function getTotalMemory() {
  return os.totalmem();
}

// Usage
const totalMemory = getTotalMemory();
console.log(`Total memory: ${totalMemory} bytes`);
