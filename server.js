import 'babel-polyfill'
import express from 'express'
import Html from "./app/components/common/Html";

//initialize app
const app = express();

//set public folder
app.use(express.static('public'))

//set port
const PORT = 9000;

//set router
app.get('*', (req, res) => {
	res.status(200).send(Html)
})

//listen for requests
app.listen(PORT, () => {
	console.log('Server listening on:', PORT)
})
