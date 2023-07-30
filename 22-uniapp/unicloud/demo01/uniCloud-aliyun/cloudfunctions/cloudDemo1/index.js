'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	// let res = await db.collection("users").get()
	// let res = await db.collection("users").count()
	// let res = await db.collection("users").add([{
	// 	name:"小红",
	// 	gender:"女"
	// },{name:"小黄",gender:"男"}])
	let {name,tel} = event
	let res = await db.collection("users").add({
		name,
		tel
	})
	return res
};