import express from "express"
import pos from "./pos/index.js"

const app = express()
const port = process.env.PORT || 3001

app.post("/pos", pos)

app.listen(port, () =>
	console.log(JSON.stringify({ app: "traffic-light-headsup", status: "running", port }))
)
