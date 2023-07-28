<template>
	<view class="out">
		<view style="width: 200rpx;height: 200rpx;background-color: pink;" @click="goList"></view>
		<myitem></myitem>
		<publicbox></publicbox>
		<pubTitle :title="test"></pubTitle>
		<navigator url="/pages/list/list">新闻列表</navigator>
		<view class="box"></view>
		<view class="block"></view>
		<icon type="success" size="26"></icon>
		<view>uniapp</view>
		<view>web前端开发</view>
		<text selectable>nodejs span</text>
		<text>123</text>
		<scroll-view class="scroll" scroll-x scroll-y>
			<view class="group">
				<view class="item">
					111
				</view>
				<view class="item">
					222
				</view>
				<view class="item">
					333
				</view>
				<view class="item">
					444
				</view>
				<view class="item">
					555
				</view>
			</view>
		</scroll-view>
		<swiper class="swiper">
			<swiper-item>111</swiper-item>
			<swiper-item>222</swiper-item>
			<swiper-item>333</swiper-item>
			<swiper-item>444</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				test:'666'
			}
		},
		methods:{
			goList(){
				uni.navigateTo({
					url:'/pages/list/list'
				})
			}
		}
	}
</script>

<style lang="scss">
	.out{
		.box{
			width:200px;
			height: 200px;
			background-color: pink;
		}
		.block{
			width: 200rpx;
			height: 200rpx;
			background-color: green;
		}
		.scroll{
			box-sizing: border-box;
			border:1px solid red;
			height: 100rpx;
			.group{
				white-space: nowrap;
				.item{
					width:220rpx;
					height:220rpx;
					background-color: royalblue;
					display: inline-block;
					margin-right: 10rpx;
				}
			}
		}
	}
</style>
