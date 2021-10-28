const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const knex = require('knex')

const db = knex({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'clarifaitest'
  }
});

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res)=> {
  res.send(database.entries)
})

app.post('/image', (req, res) => {
  console.log('/image')
  db('entries')
  .increment('score', 1)
  .returning('score')
  .then(score => {
    console.log('score', score)
    res.json(score[0])
  })
  .catch(err => res.status(400).json('unable to get score'))
})

app.listen(3000, ()=> {
  console.log('app is running on port 3000')
})
