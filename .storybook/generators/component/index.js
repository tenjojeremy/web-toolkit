const emoji = require('node-emoji')
const chalk = require('chalk')

const capitalize = require('./utils/capitalize')
const getOutputPathBase = require('./utils/outputPathBase')
const validate = require('./validation')

const createIndex = require('./templates/index.js')
const createPropTypes = require('./templates/propTypes.js')
const createStories = require('./templates/stories/index.js')
const createStyles = require('./templates/styles.js')
const createTests = require('./templates/tests.js')

const path = process.argv[2]
const splitPath = path.split('/')
const name = splitPath[splitPath.length - 1]
const successMessage = `${emoji.get('white_check_mark')}  ${chalk.yellow(path)} created!`
const error = validate(path)

if (error) return console.log(error)

const nameUppercase = capitalize(name)
const outputPathBase = getOutputPathBase(path)
const payload = { path, name, nameUppercase, outputPathBase }

const createTemplates = async () => {
  createIndex(payload)
  createPropTypes(payload)
  await createStories(payload)
  createStyles(payload)
  createTests(payload)

  console.log(successMessage)
}

return createTemplates()
