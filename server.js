const express = require('express')
const history = require('connect-history-api-fallback')
const path = require('path')

const app = express()

app.set('port', process.env.PORT || 8080)

app.use(express.static(path.join(__dirname, 'dist')))
app.use(history({
    verbose: true
}))
app.use(express.static(path.join(__dirname, 'dist')))

app.listen(app.get('port'), () => {
   console.log('Server running at http://localhost:' + app.get('port'))
})
