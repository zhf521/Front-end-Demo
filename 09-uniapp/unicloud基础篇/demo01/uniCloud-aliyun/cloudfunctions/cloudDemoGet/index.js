'use strict';
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	// let res = await db.collection("users").doc("64c62795a7c432baa0dc36d7").get()
	let res = await db.collection("users").where({
		gender:dbCmd.eq('女')
	}).get()
	return res
};
