const username = process.env.MONGO_USERNAME || 'theUser'
const password = process.env.MONGO_PASSWORD || 'thePass'

module.exports = {
  dbURL: `mongodb+srv://${username}:${password}@cluster0-klgzh.mongodb.net/test?retryWrites=true&w=majority`,
  dbName:'jello_db'
}
