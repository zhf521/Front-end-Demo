<template>
	<view class="add">
		<form @submit="onSubmit">
			<view class="item">
				<input v-model="formValue.title" type="text" name="title" placeholder="请输入标题">
			</view>
			<view class="item">
				<input v-model="formValue.author" type="text" name="author" placeholder="请输入作者">
			</view>
			<view class="item">
				<textarea v-model="formValue.content" name="content" placeholder="请输入内容"></textarea>
			</view>
			<view class="item">
				<uni-file-picker v-model="imageValue" fileMediatype="image" mode="grid" @select="select"
					@progress="progress" @success="uploadSuccess" @fail="fail" />
			</view>
			<view class="item">
				<button form-type="reset">重置</button>
				<button form-type="submit" type="primary" :disabled="isDisabled(formValue)">提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageValue: [],
				formValue: {
					title: "",
					author: "",
					content: ""
				},
				picurls: []
			}
		},
		methods: {
			uploadSuccess(e) {
				this.picurls = e.temFilePaths
			},
			isDisabled(obj) {
				for (let key in obj) {
					if (!obj[key]) {
						return true
					}
				}
			},
			onSubmit(e) {
				console.log(e)
				let detail = e.detail.value
				uniCloud.callFunction({
					name: 'art_add_row',
					data: {
						detail,
						picurls: this.picurls
					}
				}).then(res => {
					uni.showToast({
						title: "发布成功"
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add {
		padding: 30rpx;

		.item {
			padding-bottom: 20rpx;

			input,
			textarea {
				border: 1rpx solid #eee;
				height: 80rpx;
				padding: 0 20rpx;
			}

			textarea {
				height: 200rpx;
				width: 100%;
			}

			button {
				margin-bottom: 20rpx;
			}
		}
	}
</style>