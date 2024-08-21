const { platform } = require('os');
const { exec } = require('child_process');

const WINDOWS_PLATFORM = 'win32';

const url = 'http://localhost:3000/home'

const browserOpen = () => {
  const osPlatform = platform();

  let command;

  if (osPlatform === WINDOWS_PLATFORM) {
    command = `start chrome ${url}`;
  } else if (osPlatform === MAC_PLATFORM) {
    command = `open -a "Google Chrome" ${url}`;
  } else {
    command = `google-chrome --no-sandbox ${url}`;
  }

  exec(command)
}

module.exports = {
  browserOpen
}