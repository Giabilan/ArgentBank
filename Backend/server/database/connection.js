const mongoose = require('mongoose')
const databaseUrl = "mongodb+srv://argentbankdb:dsfmZmbvdv7ICmMK@argentbank.68rlpfw.mongodb.net/?retryWrites=true&w=majority";

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
