import { ipcRenderer, contextBridge } from "electron";

const api = {
    write: (content: string) => {
        ipcRenderer.send('write', [content]);
    },

    writePost: (callback: () => void) => {
        ipcRenderer.on('write-post', () =>
        {
            callback();
        })
    },

    read: () => {
        ipcRenderer.send('read');
    },

    readPost: (callback: (content: string) => void) =>{
        ipcRenderer.on('read-post', (_, args) => {
            callback(args[0] ?? '');
        })
    },

    load_bezier: () => {
        ipcRenderer.send('load_bezier')
    },

    load_index: () => {
        ipcRenderer.send('load_index')
    }
}

declare global {
    interface Window{
        api: typeof api;
    }
}

contextBridge.exposeInMainWorld('api', api);