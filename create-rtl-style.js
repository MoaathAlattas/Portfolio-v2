const fs = require('fs')
const postcss = require('postcss')
const smartImport = require('postcss-smart-import')
const url = require('postcss-url')
const rtlcss = require('rtlcss')

const STYLES_PATH = './src/styles'

const css = fs.readFileSync(STYLES_PATH + '/style.css', 'utf8')

postcss()
  .use(smartImport())
  .use(
    url({
      url: 'rebase'
    })
  )
  .use(rtlcss())
  .process(css, { from: STYLES_PATH + '/style.css', to: STYLES_PATH + '/style.rtl.css' })
  .then(result => fs.writeFileSync(STYLES_PATH + '/style.rtl.css', result.css))
