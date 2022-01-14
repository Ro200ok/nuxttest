const bodyParser = require('body-parser');
const app = require('express')();
const axios = require('axios')
import dbProvider from '../db/index';

app.use(bodyParser.json())


app.all('/getjson', (req, res) => {
  dbProvider.getUsers.then( rows =>{
    res.json(rows)
  })
  .catch(err => {
    console.log(err)
    throw new Error(err);
  });
})


app.all('/posts', (req, res) => {
  axios.get('http://elastic:MagicPatriotgorodPeremens876tghui@new-el.fabricmedia.ru:9271/posts/_search').then(resp => {
    res.json(resp.data.hits.hits)
  }).catch(err => {
    console.log(err)
    throw new Error(err);
  });
})

app.all('/post/:id', (req, res) => {
  axios.get(`http://elastic:MagicPatriotgorodPeremens876tghui@new-el.fabricmedia.ru:9271/posts/_doc/${req.params.id}`).then(resp => {
    res.json(resp.data)
  }).catch(err => {
    console.log(err)
    throw new Error(err);
  });
})

export default {
  path: '/api',
  handler: app
}


