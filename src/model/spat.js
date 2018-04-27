import { types } from "mobx-state-tree"

const Todo = types.model({
	name: "",
	done: false
})
