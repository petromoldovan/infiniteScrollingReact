import 'babel-polyfill'
import express from 'express'
import path from 'path'

//initialize app
const app = express();

//set public folder
app.use(express.static('public'))

//set port
const PORT = 3000;

//set router
app.get('*', function(req, res) {
	res.status(200).sendFile(path.join(__dirname, './index.html'))
})

//listen for requests
app.listen(PORT, function(){
	console.log('Server listening on:', PORT)
})
