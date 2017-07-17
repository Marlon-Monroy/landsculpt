
const bodyParser = require('body-parser')
module.export.setup = function(app) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

}