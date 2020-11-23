//create new express app
let express = require('express')

//require body parser library
let bodyParser = require('body-parser')
//require qpi routes
let api_routes = require('./routes/api.js')

let path = require('path')

//create new web app
let app = express()
app.use(express.static(path.join(__dirname, 'student-sign-in-client', 'dist')))

        //tell app to use body parse library
        app.use(bodyParser.json())

        app.use('/api', api_routes)

        app.use(function(req,res,next){
            res.status(404).send('Not found')
        })

        app.use(function(err,req,res,next){
            console.error(err.stack)
            res.status(500).send('Server error')
})

//create server to run app
//tell server which port to work run on (environmental variable value or port 3000) if
let server = app.listen(process.env.port || 3000, function (){
    console.log('Express server running on port', server.address().port )
})