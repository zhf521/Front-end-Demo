<template>
	<view class="detail">
		<view class="title">

		</view>
		<view class="info">
			<text></text>
			<text></text>
		</view>
		<view class="content">

		</view>
		<view class="btnGroup">
			<button size="mini">修改</button>
			<button type="warn" size="mini">删除</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
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