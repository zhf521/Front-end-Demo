'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let res = await db.collection("users").where({
		gender:'man'
	}).update({
		name:"man"
	})
	return {
		msg:"修改成功",
		res
	}
};
