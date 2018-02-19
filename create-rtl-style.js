const fs = require('fs')
const postcss = require('postcss')
const smartImport = require('postcss-smart-import')
const url = require('postcss-url')
const rtlcss = require('rtlcss')
var sass = require('node-sass')

const STYLES_PATH = './src/styles'
const scss = fs.readFileSync(STYLES_PATH + '/style.scss', 'utf8')

const css = sass.renderSync({
  data: scss,
  includePaths: [STYLES_PATH]
})

postcss()
  .use(smartImport())
  .use(
    url({
      url: 'rebase'
    })
  )
  .use(rtlcss())
  .process(css.css.toString('utf8'), { from: STYLES_PATH + '/style.scss', to: STYLES_PATH + '/style.rtl.scss' })
  .then(result => fs.writeFileSync(STYLES_PATH + '/style.rtl.scss', result.content))
