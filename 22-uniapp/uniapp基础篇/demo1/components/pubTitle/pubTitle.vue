<template>
	<view>
		<view class="pubTitle">
			<view class="big">
				{{title}}
			</view>
			<view class="small">
				副标题
			</view>
			<view class="line"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"pubTitle",
		props:["title"],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.pubTitle{
		padding:60rpx 30rpx;
		text-align: center;
		.big{
			font-size: 50rpx;
			font-weight: 600;
		}
		.small{
			font-size:28rpx;
			color:#888;
		}
		.line{
			display: inline-block;
			width:80rpx;
			height: 3rpx;
			background-color: green;
		}
	}
</style>