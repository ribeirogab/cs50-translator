const readlineSync = require('readline-sync')
const fs = require('fs')

module.exports = function chooseFile () {
  const dir = './src/subtitles'

  const filesArr = fs.readdirSync(dir)
  const selectedFileIndex = readlineSync.keyInSelect(
    filesArr,
    'Escolha um arquivo de legenda (.srt): '
  )
  console.log('\n')
  const selectedFileName = filesArr[selectedFileIndex]

  return selectedFileName.replace('.srt', '')
}
