import {
    app,
    autoUpdater,
    BrowserWindow,
    contentTracing,
    dialog,
    globalShortcut,
    ipcMain,
    Menu,
    MenuItem,
    powerMonitor,
    protocol,
    Tray,
    clipboard,
    crashReporter,
    nativeImage,
    screen,
    shell
} from 'electron'

// crashReporter.start(null)

var mainWindow: Electron.BrowserWindow = null;

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
    mainWindow.loadURL('file://' + __dirname + '/../../index.html')

    mainWindow.on('closed', () => {
        mainWindow = null
    })
})
