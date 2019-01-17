const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

app.on('ready', () => {
    let browser = new BrowserWindow({width: 1920, height: 1080})
    let startURL = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, 'electron-public/index.html'),
        protocol: 'file:',
        slashes: true
    })
    browser.loadURL(startURL)
    browser.on('closed', () => browser = null)
    
    browser.loadFile('./electron-public/index.html')
}).on('window-all-closed', app.quit)