'use strict';
const db = uniCloud.datebase()
exports.main = async (event, context) => {
	let {
		detail
	} = event
	db.collection("article").doc(detail._id).update({
		title: detail.title,
		author: detail.author,
		content: detail.content
	})
};