'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	return await db.collection("article").get()
};