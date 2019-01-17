const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    let browser = new BrowserWindow({width: 1920, height: 1080})
    browser.on('closed', () => browser = null)
    browser.loadFile('./electron-public/index.html')
}).on('window-all-closed', app.quit)