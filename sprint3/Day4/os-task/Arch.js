const os = require('os');

function getCurrentCPUArchitecture() {
  return os.arch();
}

// Usage
const currentCPUArchitecture = getCurrentCPUArchitecture();
console.log(`Current CPU architecture: ${currentCPUArchitecture}`);
