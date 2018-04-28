import { URL } from "url"

import store from "./store"

export default function(req, res) {
	const url = new URL(req.url, "http://example.com")
	const user = url.searchParams.get("user")
	store[user] = req

	res.writeHead(200, {
		"content-type": "text/event-stream"
	})
}
