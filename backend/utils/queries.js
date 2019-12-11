const fetch = require('node-fetch')
const token = require('./jwt')
const config = require('config')

const fetchGql = async gqlQuery => {
    const gqlUrl = config.get('graphql_url')
    
    console.log('query', gqlQuery)
    const result = await fetch(gqlUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({ query : gqlQuery}),
    })
        .then(res => res.json())
        .then(data => {
            console.log('data', data)
        if (data.errors) {
            return data.errors
        } else {
            return data
        }
        })
        .catch(err => console.error(err))
    return result
}

module.exports = fetchGql