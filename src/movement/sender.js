import { Url } from "url"

import store from "./store"

export default function(req, res) {
	const url = new Url(req.url)
	const user = url.searchParams.get("user")
	store[user] = req

	res.writeHead(200, {
		"content-type": "text/event-stream"
	})
}
