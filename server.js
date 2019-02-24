import express from 'express'
import getHTML from "./app/components/common/Html";
const config = require('config');

//initialize app
const app = express();

//set public folder
app.use(express.static('public'))

//set port
const PORT = config.port || 9001;

const passConfig = {
	apiEndpoint: config.get('apiEndpoint')
}

//set router
app.get('*', (req, res) => {
	res.status(200).send(getHTML(passConfig))
})

//listen for requests
app.listen(PORT, () => {
	console.log('Server listening on:', PORT)
})
