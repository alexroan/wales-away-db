
import { connect } from '../database/connection.js'
import commandLineArgs from 'command-line-args'

const optionDefinitions = [
  { name: 'name', type: String, multiple: false},
  { name: 'dob', type: String, multiple: false}
]
const options = commandLineArgs(optionDefinitions)
console.log(options)

const db = await connect()
const newId = db.data.players.length

db.data.players.push({id: newId, name: options.name, dob: options.dob})
await db.write()

