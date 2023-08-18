const username = process.env.MONGO_USERNAME || 'theUser'
const password = process.env.MONGO_PASSWORD || 'thePass'

module.exports = {
  dbURL: `mongodb+srv://${username}:${password}@cluster0.xf6lg.mongodb.net/?retryWrites=true&w=majority`,
  dbName:'jello_db'
}
