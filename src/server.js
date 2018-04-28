import express from "express"
import fs from "fs"
import pos from "./pos/index"
import movement from "./movement/sender"
import poller from "./spat/poller"

const options = {}

if (fs.exists("./key.pem")) {
	options.key = fs.readFileSync("./key.pem")
	options.cert = fs.readFileSync("./cert.pem")
}

const app = express(options)
const port = process.env.PORT || 3001

// start asking spat for data
poller()

app.post("/pos", pos)
app.get("/movement", movement)

app.listen(port, () =>
	console.log(
		JSON.stringify({ app: "traffic-light-headsup", status: "running", port })
	)
)
