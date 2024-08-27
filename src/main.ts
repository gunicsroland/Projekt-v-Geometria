import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import fs from 'fs';

let window: BrowserWindow;

app.on('ready', () => {
    window = new BrowserWindow({
        webPreferences: {
            preload: path.join(app.getAppPath(), 'dist/preload.js')
        },
        autoHideMenuBar: true,
    });

    window.loadFile(path.join(app.getAppPath(), 'src/index.html'));
    window.maximize();
    window.webContents.openDevTools();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

ipcMain.on('read', () => {
    fs.readFile(path.join(app.getAppPath(), 'content.txt'), (err, content) => {
        if (err){
            throw err;
        }
        else{
            window.webContents.send('read-post', [content.toString()]);
        }
    });
});

ipcMain.on('write', (_, args) => {
    fs.writeFile(path.join(app.getAppPath(), 'content.txt'), args[0] ?? '', (err) => {
        if(err){
            throw err;
        }
        else{
            window.webContents.send('write-post');
        }
    })
});