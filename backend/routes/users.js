const auth = require('../middleware/auth')
const bcrypt = require('bcrypt')
const express = require('express')
const query = require('../utils/queries')
const token = require('../utils/jwt')
const router = express.Router()

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
      res.sendStatus(418)
      return
  }
    const hashedPassword = await bcrypt.hash(password, 10)
    const createUserMutation = `mutation createUser { insert_users(objects: {name: "${name}", password: "${hashedPassword}", email: "${email}"}) {
        returning {
          id
        }
      }}`
    const created = await query(createUserMutation)
    res.send(created)
})

router.post('/login', async (req, res) => {
    if (!req.body.user) {
        res.send(400)
    }
    const findUserQuery = `query findUser { users_aggregate(where: {name: {_eq: "${req.body.user}" }} ){nodes{password}}}`
    const queried = await query(findUserQuery)
    const found = queried.data.users_aggregate.nodes[0].password
    if (!req.body.password) {
        res.send(401, "Please give password")
    } else if (!found) {
        res.send(401, "Username not found")
    } else {
        bcrypt.compare(req.body.password, found, (err, result) => {
            if (err) throw err
            if (result) {
                res.send(200, {"token": token})
            } else {
                res.sendStatus(401)
            }
        })
    }
  
})

module.exports = router
