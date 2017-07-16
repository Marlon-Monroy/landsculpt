const bodyParser = require('body-parser')

function setup(app) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
}
 module.exports.setup = setup