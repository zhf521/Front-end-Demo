<template>
	<view class="detail">
		<view v-if="loadingState">
			<view class="title">
				{{detail.title}}
			</view>
			<view class="info">
				<text>{{detail.author}}</text>
				<text><uni-dateformat :date="detail.posttime" :threshold="[60000,3600000]"></uni-dateformat></text>
			</view>
			<view class="content">
				{{detail.content}}
			</view>
			<view class="btnGroup">
				<button size="mini" @click="goEdit">修改</button>
				<button type="warn" size="mini" @click="onRemove">删除</button>

			</view>
		</view>
		<view v-else>
			<uni-load-more status="loading"></uni-load-more>
		</view>
	</view>
</template>

<script>
	let id
	export default {
		data() {
			return {
				detail: {},
				loadingState: false
			};
		},
		onLoad(e) {
			// console.log(e)
			id = e.id
		},
		onShow() {
			this.getDetail()
		},
		methods: {
			goEdit() {
				uni.navigateTo({
					url: "/pages/edit/edit?id=" + id
				})
			},
			onRemove() {
				uni.showModal({
					content: "是否确认删除？",
					success: res => {
						if (res.confirm) {
							this.removeFun()
						}
					}
				})
			},
			removeFun() {
				uniCloud.callFunction({
					name: "art_remove_row",
					date: {
						id
					}
				}).then(res => {
					// console.log(res)
					uni.showToast({
						title: "删除成功"
					})
					setTimeout(() => {
						uni.reLaunch({
							url: "/pages/index/index"
						})
					}, 800)
				})
			},
			getDetail() {
				uniCloud.callFunction({
					name: "art_get_row",
					data: {
						id
					}
				}).then(res => {
					// console.log(res)
					this.detail = res.result.data[0]
					this.loadingState = true
					uni.setNavigationBarTitle({
						title: this.detail.title
					})
				}).catch(() => {
					uni.showToast({
						icon: "error",
						title: "参数有误"
					})
					setTimeout(() => {
						uni.reLaunch({
							url: "/pages/index/index"
						})
					}, 800)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail {
		padding: 30rpx;

		.title {
			font-size: 50rpx;
			color: #000;
			text-align: justify;
			line-height: 1.4rem;
		}

		.info {
			font-size: 30rpx;
			color: #666;
			padding: 30rpx 0 60rpx;

			text {
				padding-right: 30rpx;
			}
		}

		.content {
			font-size: 36rpx;
			line-height: 1.4rem;
		}

		.btnGroup {
			padding: 50rpx 0;

			button {
				margin-right: 50rpx 30rpx;
			}
		}
	}
</style>