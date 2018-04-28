import { Client } from "pg"

export const client = new Client()
const connect = client.connect()
connect.catch(err => console.error(JSON.stringify({ err: err.toString() })))

export default client
