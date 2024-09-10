const { app, BrowserWindow } = require('electron')
const electronReload = require('electron-reload')

require("electron-reload")(__dirname, {
  // Note that the path to electron may vary according to the main file
  electron: require(`${__dirname}/node_modules/electron`),
});

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    autoHideMenuBar: true,
  })

  //win.webContents.openDevTools()
  win.loadFile('./public/src/pages/index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})