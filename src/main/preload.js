const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    // Future Electron APIs will go here.
});