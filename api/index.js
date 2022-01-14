const bodyParser = require('body-parser');
const app = require('express')();
const cors = require('cors')
import dbProvider from '../db/index';

app.use(bodyParser.json())
app.use(cors())

app.all('/getjson', (req, res) => {
  dbProvider.getUsers.then( rows =>{
    res.json(rows)
  })
  .catch(err => {
    console.log(err)
    throw new Error(err);
  });
})


export default {
  path: '/api',
  handler: app
}


