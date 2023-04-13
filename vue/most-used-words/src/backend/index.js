const { ipcMain } = require("electron")

const pathToRows = require("./pathsToRows")
const prepareData = require("./prepareData")
const groupdWords = require("./groupdWords")

ipcMain.on("process-subtitles", (event, paths) => {
    pathToRows(paths)
    .then(rows => prepareData(rows))
    .then(preparedData => groupdWords(preparedData))
    .then(groupedWords => {
        event.reply("process-subtitles", groupedWords)
    })
})