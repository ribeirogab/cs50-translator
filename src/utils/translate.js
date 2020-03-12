const googleTranslate = require('google-translate')

module.exports = async function translateItem (text, API_KEY, language) {
  return new Promise((resolve, reject) => {
    googleTranslate(API_KEY).translate(text, language, (err, translation) => {
      if (err) {
        reject(err)
      } else {
        resolve(translation.translatedText)
      }
    })
  })
}
