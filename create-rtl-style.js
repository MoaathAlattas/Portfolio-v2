const fs = require('fs')
const postcss = require('postcss')
const smartImport = require('postcss-smart-import')
const url = require('postcss-url')
const rtlcss = require('rtlcss')

const css = fs.readFileSync('src/style.css', 'utf8')

postcss()
  .use(smartImport())
  .use(
    url({
      url: 'rebase'
    })
  )
  .use(rtlcss())
  .process(css, { from: 'src/style.css', to: 'src/style.rtl.css' })
  .then(result => fs.writeFileSync('src/style.rtl.css', result.css))
