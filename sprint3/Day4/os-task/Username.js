const os = require('os');

function getCurrentUsername() {
  const userInfo = os.userInfo();
  return userInfo.username;
}

// Usage
const currentUsername = getCurrentUsername();
console.log(`Current username: ${currentUsername}`);
