const translateItem = require('../utils/translate')
const filterLine = require('../utils/filterLine')
const { green, yellow, reset } = require('../utils/consoleTextColors')

module.exports = async function translationQueue (allLines, API_KEY, language) {
  console.log(`${yellow}Iniciando tradução... (Ctrl + C para interromper)\n${reset}`)
  console.log(`${green}> 0.00%${reset}`)
  const allLinesTranslated = []
  let percentage = 0

  const queue = {
    start: 0,
    end: allLines.length < 40 ? allLines.length : 40
  }

  while (percentage < 100) {
    const linesToTranslate = [...await addLinesToTranslate([], queue, allLines)]

    allLinesTranslated.push(...await translate(linesToTranslate, API_KEY, language))

    percentage = parseFloat((allLinesTranslated.length * 100) / allLines.length).toFixed(2)

    console.log(`${green}> ${percentage}%${reset}`)

    queue.start = queue.end
    queue.end = allLines.length < queue.end + 40 ? allLines.length : queue.end + 40
  }

  return allLinesTranslated
}

async function addLinesToTranslate (linesToTranslate, queue, allLines) {
  for (let i = queue.start; i < queue.end; i++) {
    linesToTranslate.push(allLines[i])
  }
  return linesToTranslate
}

async function translate (allLines, API_KEY, language) {
  const allLinesTranslated = []

  for (let i = 0; i < allLines.length; i++) {
    if (filterLine(allLines[i])) {
      allLinesTranslated.push(await translateItem(allLines[i], API_KEY, language))
    } else {
      allLinesTranslated.push(allLines[i])
    }
  }

  return allLinesTranslated
}
