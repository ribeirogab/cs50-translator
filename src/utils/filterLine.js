module.exports = function filterLine (line) {
  return (line !== '' && isNaN(line[0]) && isNaN(line[1])) || line[0] === 'I'
}
