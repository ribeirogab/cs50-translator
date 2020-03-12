const fs = require('fs')
const translationQueue = require('./services/translationQueue')
const chooseFile = require('./services/chooseFile')
const { green, yellow, reset } = require('./utils/consoleTextColors')

async function start () {
  const API_KEY = require('./key/google-translate.json').API_KEY
  const language = 'pt-BR'

  const fileName = chooseFile()
  const contentFilePath = `./src/subtitles/${fileName}.srt`
  const contentFilePathTranslated = `./src/translated/${fileName}_${language}.srt`

  const allLines = fs.readFileSync(contentFilePath, 'utf-8').split('\n')
  const allLinesTranslated = await translationQueue(allLines, API_KEY, language)

  console.log(`\n${green}Tradução concluida com sucesso!\n\n${yellow}Caminho do arquivo: ./src/translated/${fileName}_${language}.srt${reset}\n`)
  fs.writeFileSync(contentFilePathTranslated, allLinesTranslated.join('\n'))
}

start()
