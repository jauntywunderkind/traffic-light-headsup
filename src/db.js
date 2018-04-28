import { Client } from "pg"

export const client = new Client()
client.connect()

export default client
