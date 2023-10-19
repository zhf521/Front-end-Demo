'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	return await db.collection("users").where({
		name:'王五'
	}).remove()
};
